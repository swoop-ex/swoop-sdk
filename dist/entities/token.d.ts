import { ChainID } from '@harmony-js/utils';
import { Currency } from './currency';
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export declare class Token extends Currency {
    readonly chainId: ChainID;
    readonly address: string;
    constructor(chainId: ChainID, address: string, decimals: number, symbol?: string, name?: string);
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
     * @param other other token to compare
     */
    equals(other: Token): boolean;
    /**
     * Returns true if the address of this token sorts before the address of the other token
     * @param other other token to compare
     * @throws if the tokens have the same address
     * @throws if the tokens are on different chains
     */
    sortsBefore(other: Token): boolean;
}
/**
 * Compares two currencies for equality
 */
export declare function currencyEquals(currencyA: Currency, currencyB: Currency): boolean;
export declare const WONE: {
    1: Token;
    2: Token;
    0: Token;
    3: Token;
    4: Token;
    30: Token;
    31: Token;
    42: Token;
    61: Token;
    62: Token;
    1337: Token;
};
