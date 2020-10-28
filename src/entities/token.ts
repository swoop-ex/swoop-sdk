import invariant from 'tiny-invariant'
import { ChainID } from '@harmony-js/utils'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainID
  public readonly address: string

  public constructor(chainId: ChainID, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export type EnumDictionary<T extends string | symbol | number, U> = {
  [K in T]: U
}

// @ts-ignore TS2740 ignore incomplete dictionary
export const WONE: EnumDictionary<ChainID, Token> = {
  [ChainID.HmyMainnet]: new Token(
    ChainID.HmyMainnet,
    '0xF0e3E0218fD1C9C99f260E589935361fa07d7957', // deployed Wed 28 Oct 2020 08:25:39 AM UTC
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainID.HmyTestnet]: new Token(
    ChainID.HmyTestnet,
    '0xF561b31d0c6f9c8b96a0Ee5DFADDaC9787Eaa70c', // deployed Wed 28 Oct 2020 08:57:49 AM UTC
    18,
    'WONE',
    'Wrapped ONE'
  )
}
