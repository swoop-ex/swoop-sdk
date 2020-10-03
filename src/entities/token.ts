import invariant from 'tiny-invariant'
import { ChainID } from '@harmony-js/utils';
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
    [K in T]: U;
};

export const WONE: EnumDictionary<ChainID, Token> = {
  [ChainID.HmyMainnet]: new Token(
    ChainID.HmyMainnet,
    '0x92bEad480f51B3513dA9c419C850613Ac50bd6ad',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainID.HmyTestnet]: new Token(
    ChainID.HmyTestnet,
    '0x67EaaAE974AFe4ffF1cEAd04EbbAA748a7BEF8aB',
    18,
    'WONE',
    'Wrapped ONE'
  ),

  [ChainID.Default]: new Token(
    ChainID.Default,
    '0x0000000000000000000000000000000000000000',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainID.EthMainnet]: new Token(
    ChainID.EthMainnet,
    '0x0000000000000000000000000000000000000000',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainID.Morden]: new Token(
    ChainID.Morden,
    '0x0000000000000000000000000000000000000000',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainID.Ropsten]: new Token(
    ChainID.Ropsten,
    '0x0000000000000000000000000000000000000000',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainID.Rinkeby]: new Token(
    ChainID.Rinkeby,
    '0x0000000000000000000000000000000000000000',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainID.RootstockMainnet]: new Token(
    ChainID.RootstockMainnet,
    '0x0000000000000000000000000000000000000000',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainID.RootstockTestnet]: new Token(
    ChainID.RootstockTestnet,
    '0x0000000000000000000000000000000000000000',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainID.Kovan]: new Token(
    ChainID.Kovan,
    '0x0000000000000000000000000000000000000000',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainID.EtcMainnet]: new Token(
    ChainID.EtcMainnet,
    '0x0000000000000000000000000000000000000000',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainID.EtcTestnet]: new Token(
    ChainID.EtcTestnet,
    '0x0000000000000000000000000000000000000000',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainID.Geth]: new Token(
    ChainID.Geth,
    '0x0000000000000000000000000000000000000000',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainID.Ganache]: new Token(
    ChainID.Ganache,
    '0x0000000000000000000000000000000000000000',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainID.HmyLocal]: new Token(
    ChainID.HmyLocal,
    '0x0000000000000000000000000000000000000000',
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainID.HmyPangaea]: new Token(
    ChainID.HmyPangaea,
    '0x0000000000000000000000000000000000000000',
    18,
    'WONE',
    'Wrapped ONE'
  )
}
