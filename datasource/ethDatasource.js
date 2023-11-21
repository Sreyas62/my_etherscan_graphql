const { RESTDataSource } = require("apollo-datasource-rest");

// Vitalik Buterin's Ethereum address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"; 

// Etherscan Data Source Class that extends the RESTDataSource
class EtherDataSource extends RESTDataSource {

  // Constructor to set the base URL
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api"; 
  }

  // Gets the Ether balance for the address
  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Gets the total supply of Ether
  async totalSupplyOfEther() {
    return this.get(  
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Gets the latest Ethereum price
  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Gets the average block confirmation time
  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource;
