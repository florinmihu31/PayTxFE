import { Transaction } from "@multiversx/sdk-core";
import { Address } from "@multiversx/sdk-core";
import { UserSecretKey } from "@multiversx/sdk-wallet";
import { UserSigner } from "@multiversx/sdk-wallet";
// Import the file system module
//const fs = require("fs");
import { fs } from "fs";

// PEM file content
// var pem = "-----BEGIN PRIVATE KEY for erd1uy5gsjpud3jdyt6c2udhxj06d644dv28q43trg3agme6hhpcjpgs5d6szv-----\n" + 
// "NjZiNWM5YTc3N2NlZDViYjNjZTExMWM3ZGNlZGRkM2JmOWE3ZTEyOTAyODUwZDQw\n" +
// "MDhhNjVhZWM3ZDUzZGFjMmUxMjg4ODQ4M2M2YzY0ZDIyZjU4NTcxYjczNDlmYTZl\n" +
// "YWI1NmIxNDcwNTYyYjFhMjNkNDZmM2FiZGMzODkwNTE=\n" +
// "-----END PRIVATE KEY for erd1uy5gsjpud3jdyt6c2udhxj06d644dv28q43trg3agme6hhpcjpgs5d6szv-----"
const pemText = fs.readFileSync("/home/student/Documents/Wallet/wallet.pem", { encoding: "utf8" });

// Generate new user secret key from the PEM string
const userSecretKey = UserSecretKey.fromPem(pem);

// Get the address of the user secret key
const address = userSecretKey.generatePublicKey().toAddress();

const userSigner = new UserSigner(userSecretKey);

// Send the transaction
const transaction = new Transaction({
    nonce: 0,
    value: "0",
    receiver: Address.fromBech32("erd1qqqqqqqqqqqqqpgqknatrzgys8rmknnjxrn0vjue5sc5g4gnjpgsjeknhz"),
    sender: address,
    gasPrice: 1000000000,
    gasLimit: 2000000,
    data: "pay",
    chainID: "D",
});

// Sign the transaction
await userSigner.sign(transaction);
console.log("Transaction signature", transaction.getSignature().hex());
console.log("Transaction hash", transaction.getHash().hex());


