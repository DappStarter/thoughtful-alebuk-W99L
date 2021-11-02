require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad gesture glimpse flat turn'; 
let testAccounts = [
"0xedb6951bd4c83963578e36b4008de4a2354c98728b2711b81c32a80a2e9b6588",
"0x6210345e56094c9e70af5f61266b7f6ea681635a086c5acb06846684090323f8",
"0x26dabcda33e61128f3fabb3342b0f9611d7d30640303f53123889e6362bb63e7",
"0x8a7e3cdd6ee57337e8fbbb0929c0c2043d4de02c9d315886821d74acfb16e559",
"0xe7c5277b3a6fbd5f8f2b184d90d168983672e0e7c91e56bac0e1869ba2e99d7e",
"0x2a0fd270c80fd6758a44f1d1e3f2a3a13d446af5e14e537df9d9d29f5e3cad54",
"0x7525871f96e349d41f02887943ec6fe3e86967c5068181f0755a24626a722884",
"0x9cee137ec972ee9193b202d47088c40facd9055d0b0379c3b70e80606a45a682",
"0x465c4fa9dcc1c0dfd028249233686151295baeacf4b55c0dcfaecb01aececb54",
"0x7c122eae50ab22c443aeecd7fad798281d8ec18204e64c04e5a311716d28915a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

