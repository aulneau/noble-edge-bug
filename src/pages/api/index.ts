import { NextApiRequest, NextApiResponse } from 'next'
import {generateMnemonic, mnemonicToSeed} from "@scure/bip39";
import {wordlist} from "@scure/bip39/wordlists/english";



export const config = {
    runtime: 'edge',
};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    console.log('object')
    const testObj = {a: 123, b: 456}
    console.log(testObj.constructor === Object) // false
    console.log(testObj.constructor instanceof Object) // true
    console.log(testObj.constructor.name === 'Object') // true

    console.log('uint8array')
    const testBytes = new Uint8Array([1, 2, 3, 4, 5])
    console.log(testBytes.constructor === Uint8Array) // false
    console.log(testBytes instanceof Uint8Array) // true

    console.log('array')
    const testArr = [1, 2, 3, 4, 5]
    console.log(testArr.constructor === Array) // false
    console.log(testArr instanceof Array) // true
    console.log(testArr.constructor.name === 'Array') // true

    const mnemonic = generateMnemonic(wordlist);

    // fails here
    const seed = await mnemonicToSeed(mnemonic);

    res.status(200).json({seed })
}
