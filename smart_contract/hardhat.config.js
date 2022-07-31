require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/gZ--8xKdC4smQBW1k9uQcp2ttDx7-int',
      accounts: ['f094170cbf0cade1513c0a53e128caebd89dd35653c3b948802ac984162122da']
    }
  }
}