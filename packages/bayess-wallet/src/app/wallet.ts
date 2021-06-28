// Copyright (c) 2021 Christopher Bradley
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.
import {
  CreatePrivateKey,
  CreateIdentity,
  CreatePublicKey,
} from '../../../bayess-common/src/main';

export class Wallet {
  public address: string;
  public private_key: string;
  public public_key: string;

  constructor(context?: Buffer) {
    const private_key = CreatePrivateKey(context);
    const identity = CreateIdentity(private_key);
    this.private_key = identity.privateKey;
    this.address = identity.address;
    this.public_key = CreatePublicKey(identity.privateKey);
  }
}
