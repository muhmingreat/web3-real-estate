require("@matterlabs/hardhat-zksync-solc");
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */

const {PRIVATE_KEY, RPC_URL,ALCHEMY_URL} = process.env
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  defaultNetwork:'sepolia',
  networks: {
    hardhat:{
      chainId:11155111 ,
    },
    sepolia:{
    url: RPC_URL,
    accounts:[`0x${PRIVATE_KEY}`]
  },
  
    zksync_testnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
      chainId: 280,
      zksync: true,
    },
    zksync_mainnet: {
      url: "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
