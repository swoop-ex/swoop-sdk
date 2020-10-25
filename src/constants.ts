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

// Testnet address: 0x95fcb04Afd86d1956e7574E52Ae2cb15450E2818 - deployed 2020-10-24 11:40 UTC
// Mainnet address: 0x511EFE91a118ABE86cbd040d72DD957B0b5512F4 - deployed 2020-10-22 18:30 UTC
export const FACTORY_ADDRESS = '0x95fcb04Afd86d1956e7574E52Ae2cb15450E2818'

// Original Uniswap code hash: 0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f
// INIT_CODE_HASH derived from @swoop-exchange/core/build/contracts/UniswapV2Pair.json bytecode -> keccak256(['bytes'], [`0x${bytecode}`])
// Updated 2020-10-23 11:09 UTC due to changing swoop-core -> UniswapV2ERC20.sol to use Swoop / SWP token name & Symbol
export const INIT_CODE_HASH = '0xe3c4d7c2f0f0eb6af0a666a9b54ea1196dd3676e4e4b696af853d8951f807cc5'

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
