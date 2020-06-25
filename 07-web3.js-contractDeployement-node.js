// require the newly installed tx library
var Tx = require('ethereumjs-tx');

// set up a Web3 connection
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/f1d63286d3764c0388bf0c284b7e0137');

// assign account to variable
const account = "0x6fe382e5A03fD4631B8cbD2D9fb0141f178e1Fe8";


//  save the private key
const PrivateKey1 = "DD7AD3794F09B77E19C994C5E4203A551D0E03DDA8B7D48624D0EFA64F234A56";

// must convert private keys to a string of binary data with a Buffer
const PrivateKey1Buffer = Buffer.from(PrivateKey1, 'hex');

// build the transaction object
// get the transaction nonce
web3.eth.getTransactionCount(account, (err, txCount) => {
    const data = "608060405234801561001057600080fd5b50610164806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80635cddc766146100515780639980ec861461006f578063a60271d2146100b1578063b9c14577146100cf575b600080fd5b6100596100ed565b6040518082815260200191505060405180910390f35b61009b6004803603602081101561008557600080fd5b8101908080359060200190929190505050610103565b6040518082815260200191505060405180910390f35b6100b9610122565b6040518082815260200191505060405180910390f35b6100d7610128565b6040518082815260200191505060405180910390f35b6000600260005402600181905550600154905090565b6000816000819055506005600054016000819055506000549050919050565b60015481565b6000548156fea2646970667358221220e06fb94197854b969c5e9dca5f07eef864c3273f798c88f8eca3fccf2b69728f64736f6c63430006070033";
    const dataBuffer = Buffer.from(data, 'hex');
    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(800000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        data: dataBuffer
    };

    // sign the transaction
    const tx = new Tx.Transaction(txObject, { chain: 'ropsten', hardfork: 'petersburg' });
    tx.sign(PrivateKey1Buffer);

    // serialize the transaction, convert it to a hex string, can be passed to Web3
    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    // send signed serialized transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log("error: ", err);
        console.log("txHash: ", txHash);
      });
    
  });
  
