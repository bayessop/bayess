import { toBuffer } from 'ethereumjs-util';
import * as secp256k1 from 'secp256k1';
const EthLib = require('eth-lib');

export const MIN_BUFFER_SIZE = 128;

type Identity = {
    address: string;
    privateKey: string;
}

export const CreatePrivateKey = (context?: Buffer): string => {
    if (context) {
        if (!Buffer.isBuffer(context)) throw new Error('Bayess.Common.CreatePrivateKey(): given context (ctx) is no Buffer');
        if (Buffer.byteLength(context, 'utf8') < MIN_BUFFER_SIZE)
          throw new Error(
            'Bayess.Common.CreatePrivateKey(): context-size must be at least ' + MIN_BUFFER_SIZE + ' (Buffer.alloc(MIN_BUFFER_SIZE, "example"))',
          );
        return EthLib.Hash.keccak256(context);
      } else {
        // @link https://github.com/MaiaVictor/eth-lib/blob/master/lib/account.js#L8
        const innerHex = EthLib.Hash.keccak256(EthLib.Bytes.concat(EthLib.Bytes.random(32), EthLib.Bytes.random(32)));
        const middleHex = EthLib.Bytes.concat(
          EthLib.Bytes.concat(EthLib.Bytes.random(32), innerHex),
          EthLib.Bytes.random(32),
        );
        return EthLib.Hash.keccak256(middleHex);
      }
}

export const CreateIdentity = (private_key: string): Identity => {
    return EthLib.Account.fromPrivate(private_key)
}

export const CreatePublicKey = (private_key: string): string => {
    if (!private_key.startsWith('0x')) private_key = '0x' + private_key;
    const buffered_private_key = toBuffer(private_key);
    if (!Buffer.isBuffer(buffered_private_key))
      throw new Error('Bayess.Common.CreatePublicKey(): error converting private_key to Buffer');
    const buffered_public_key = Buffer.from(secp256k1.publicKeyCreate(buffered_private_key, false));
    return Buffer.from(buffered_public_key).slice(1).toString('hex');
}