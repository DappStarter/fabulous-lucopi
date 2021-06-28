require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid arch outer sugar warrior ridge remember modify gloom knee bottom gate'; 
let testAccounts = [
"0x46cd1a8cc8bd642ae59da4b9bffb17ca98fc67c95dbcaac7e5899e79dc4fc710",
"0x35a951d21bc4b3c0c141be1ebe04fceadb637498f7199e728329b04305ff5c05",
"0xd8cc587ead9ceb1fe05b351be5a0715333fec72025741014d475f2ea7ae35a85",
"0xd716d78ac08cc13f2de96bedf67972bca4e6df9ab9f15542842ae2e97654aa4f",
"0x250fc2674bfe31697181ceea6292a54609f162ca53ef21f354964b8904cb0e00",
"0x7c37c3f7c921795dbbc29256a46480e849c831faf21e4e9e9d7337e70174b3e1",
"0xf842e26bd9719f15341f86bf40c2a26f005d1be0e0719193121d4b336ef6cf1e",
"0xc9f7c2ba8bd685f78a9e0d8cd9c3a0b4de04588ae337c7af248be962b608363c",
"0x385523f76a24aef48ff23e2134f13433f72249ca386bd45b5643a4ffc33956de",
"0xa3def4f670da0b9250acf579ebff04bb9d4cea6b3b941b824b458aa2714badcb"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


