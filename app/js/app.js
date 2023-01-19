import { Account, Transaction } from "@multiversx/sdk-core";
import { Address } from "@multiversx/sdk-core";
import { UserSecretKey } from "@multiversx/sdk-wallet";
import { UserSigner } from "@multiversx/sdk-wallet";
import { TransactionPayload } from "@multiversx/sdk-core";
import { ProxyNetworkProvider } from "@multiversx/sdk-network-providers";
import { TokenPayment } from "@multiversx/sdk-core";
// Import the file system module
//const fs = require("fs");
// import { fs } from "fs";

// PEM file content
var pem = "TODO: REPLACE WITH YOUR PEM FILE CONTENT"


// Generate new user secret key from the PEM string
const userSecretKey = UserSecretKey.fromPem(pem);

// Get the address of the user secret key
const address = userSecretKey.generatePublicKey().toAddress();
console.log("Address", address.bech32());

const userSigner = new UserSigner(userSecretKey);
const networkProvider = new ProxyNetworkProvider("https://devnet-gateway.elrond.com");

const client = new Account(address);
const clientOnNetwork = await networkProvider.getAccount(address);
client.update(clientOnNetwork);

console.log("Account", client);

// sendTransaction();

async function sendTransaction() {
    // Send the transaction
    const transaction = new Transaction({
        nonce: client.getNonceThenIncrement(),
        value: TokenPayment.egldFromBigInteger(1000000000000000000n),
        receiver: Address.fromBech32("erd1qqqqqqqqqqqqqpgqknatrzgys8rmknnjxrn0vjue5sc5g4gnjpgsjeknhz"),
        sender: address,
        gasPrice: 1000000000,
        gasLimit: 2000000,
        data: new TransactionPayload(Buffer.from("Hello world!", "utf8")),
        chainID: "D",
    });

    console.log("Transaction", transaction.toPlainObject());

    // Sign the transaction
    await userSigner.sign(transaction);
    console.log("Transaction signature", transaction.getSignature().hex());
    console.log("Transaction hash", transaction.getHash().hex());

    // Send the transaction
    const transactionHash = await networkProvider.sendTransaction(transaction);
    console.log("Transaction hash", transactionHash);
}