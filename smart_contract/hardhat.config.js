require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/jzmALlakBuSD5--JxCJdfeCsu-9vYNLs',
      accounts: ['b6d4b123df3c7334d0836179f73cd6efc199006bbc5d142997d0d2cde2e3643e'],
    },
  },
};