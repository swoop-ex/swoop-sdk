import { ChainID } from '@harmony-js/utils'
import { Token, WONE, Pair, TokenAmount, Route, HARMONY } from '../src'

describe('Route', () => {
  const token0 = new Token(ChainID.HmyMainnet, '0x0000000000000000000000000000000000000001', 18, 't0')
  const token1 = new Token(ChainID.HmyMainnet, '0x0000000000000000000000000000000000000002', 18, 't1')
  const wone = WONE[ChainID.HmyMainnet]
  const pair_0_1 = new Pair(new TokenAmount(token0, '100'), new TokenAmount(token1, '200'))
  const pair_0_wone = new Pair(new TokenAmount(token0, '100'), new TokenAmount(wone, '100'))
  const pair_1_wone = new Pair(new TokenAmount(token1, '175'), new TokenAmount(wone, '100'))

  it('constructs a path from the tokens', () => {
    const route = new Route([pair_0_1], token0)
    expect(route.pairs).toEqual([pair_0_1])
    expect(route.path).toEqual([token0, token1])
    expect(route.input).toEqual(token0)
    expect(route.output).toEqual(token1)
    expect(route.chainId).toEqual(ChainID.HmyMainnet)
  })

  it('can have a token as both input and output', () => {
    const route = new Route([pair_0_wone, pair_0_1, pair_1_wone], wone)
    expect(route.pairs).toEqual([pair_0_wone, pair_0_1, pair_1_wone])
    expect(route.input).toEqual(wone)
    expect(route.output).toEqual(wone)
  })

  it('supports harmony input', () => {
    const route = new Route([pair_0_wone], HARMONY)
    expect(route.pairs).toEqual([pair_0_wone])
    expect(route.input).toEqual(HARMONY)
    expect(route.output).toEqual(token0)
  })

  it('supports harmony output', () => {
    const route = new Route([pair_0_wone], token0, HARMONY)
    expect(route.pairs).toEqual([pair_0_wone])
    expect(route.input).toEqual(token0)
    expect(route.output).toEqual(HARMONY)
  })
})
