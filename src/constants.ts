import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

/*export enum ChainId {
  MAINNET = 1,
  TESTNET = 2
}*/

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// Testnet address: 0xf724d6b68beabdbc58e34ad7a6bdd4c6dccd1e2b - deployed 2020-10-01 23:20 UTC
export const FACTORY_ADDRESS = '0xf724d6b68beabdbc58e34ad7a6bdd4c6dccd1e2b'

export const INIT_CODE_HASH = '0x087cb7f0c4f3c8b377fca409d1e9dcbce23ba3ec9509c938739373196fb3afba'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
