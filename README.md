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

Node Package Manager (NPM)
The first dependency we need is Node Package Manager, or NPM, which comes with Node.js. You can see if you have node already installed by going to your termial and typing:
`$ node -v`
> Web3.js Library
You can install the Web3.js library with NPM in your terminal like this:

`$ npm install web3`
