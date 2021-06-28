import { Wallet } from '../src/main';

describe('(Wallet)', () => {
  it('passes create a new wallet', (done) => {
    const wallet = new Wallet();
    expect(wallet.address).toBeDefined();
    expect(wallet.address.slice(0, 2)).toEqual('0x');
    expect(wallet.private_key).toBeDefined();
    expect(wallet.private_key.slice(0, 2)).toEqual('0x');
    expect(wallet.public_key).toBeDefined();
    expect(
      wallet.address.length < wallet.private_key.length &&
        wallet.private_key.length < wallet.public_key.length
    ).toEqual(true);
    done();
  });
});
