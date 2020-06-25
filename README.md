# Learn-Web3-Step-by-Step
how to get started using the **Web3.js library**, the main JavaScript library for interacting with The Ethereum Blockchain. we will see, how to use web3 to talk to the Ethereum blockchain using ganache, infura and we will also run fetching results in the browser.

There are a few different aspects to developing blockchain applications with Ethereum:
1. Smart contract development - writing code that gets deployed to the blockchain with the Solidity programming language.
2. Developing websites or clients that interact with the blockchain - writing code that reads and writes data from the blockchain with smart contracts.

Web3.js enables you to fulfill the second responsibility: developing clients that interact with The Etherem Blockchain. It is a collection of libraries that allow you to read and write data from smart contracts, create smart contracts, and so much more!
Web3.js talks to The Ethereum Blockchain with JSON RPC, which stands for "Remote Procedure Call" protocol. Ethereum is a peer-to-peer network of nodes that stores a copy of all the data and code on the blockchain. Web3.js allows us to make requests to an individual Ethereum node with JSON RPC in order to read and write data to the network.

you can find more details on web3 [here.](https://web3js.readthedocs.io/en/v1.2.9/) 
[npm packages](https://www.npmjs.com/package/web3)

## Dependencies
There are a few dependencies that will help you start developing with Web3.js.

**Node Package Manager (NPM)**  
The first dependency we need is Node Package Manager, or NPM, which comes with Node.js. You can see if you have node already installed by going to your termial and typing:
`$ node -v`

**Web3.js Library**  
You can install the Web3.js library with NPM in your terminal like this:
`$ npm install web3`

**Infura RPC URL**  
In order to connect to an Ethereum node with JSON RPC on the Main Net or Test Net, we need access to an Ethereum node. There are a few ways you could do this. For one, you could run your own Ethereum node with Geth or Parity.

Mostly for convenience, you can use Infura to access an Ethereum node without having to run one yourself. Infura is a service that provides a remote Ethereum node for free. All you need to do is sign up and obtain an API key and the RPC URL for the network you want to connect to.

Once you've signed up, your Infura RPC URL should look like this:

https://mainnet.infura.io/YOUR_INFURA_API_KEY

***Now that all of your dependencies are installed, you can start developing with Web3.js!***

### CONCLUSION
1. First check balance of account on local blockchain Ganache 
2. Check account balance with infura for ropsten test net in browser
3. Check account balance with infura for ropsten test net in node.js
4. Only read contract data from blockchain
5. Send ether from one account to another using web3 and node.js
6. Write data to blockchain using node.js
7. Deploye contract to blockchain using node.js
