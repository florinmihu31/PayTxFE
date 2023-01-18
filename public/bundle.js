/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (() => {

eval("/* import { Transaction } from \"@multiversx/sdk-core\";\nimport { Address } from \"@multiversx/sdk-core\";\nimport { UserSecretKey } from \"@multiversx/sdk-wallet\";\nimport { UserSigner } from \"@multiversx/sdk-wallet\";\n// Import the file system module\n//const fs = require(\"fs\");\nimport { fs } from \"fs\";\n\n// PEM file content\n// var pem = \"-----BEGIN PRIVATE KEY for erd1uy5gsjpud3jdyt6c2udhxj06d644dv28q43trg3agme6hhpcjpgs5d6szv-----\\n\" + \n// \"NjZiNWM5YTc3N2NlZDViYjNjZTExMWM3ZGNlZGRkM2JmOWE3ZTEyOTAyODUwZDQw\\n\" +\n// \"MDhhNjVhZWM3ZDUzZGFjMmUxMjg4ODQ4M2M2YzY0ZDIyZjU4NTcxYjczNDlmYTZl\\n\" +\n// \"YWI1NmIxNDcwNTYyYjFhMjNkNDZmM2FiZGMzODkwNTE=\\n\" +\n// \"-----END PRIVATE KEY for erd1uy5gsjpud3jdyt6c2udhxj06d644dv28q43trg3agme6hhpcjpgs5d6szv-----\"\nconst pemText = fs.readFileSync(\"/home/student/Documents/Wallet/wallet.pem\", { encoding: \"utf8\" });\n\n// Generate new user secret key from the PEM string\nconst userSecretKey = UserSecretKey.fromPem(pem);\n\n// Get the address of the user secret key\nconst address = userSecretKey.generatePublicKey().toAddress();\n\nconst userSigner = new UserSigner(userSecretKey);\n\n// Send the transaction\nconst transaction = new Transaction({\n    nonce: 0,\n    value: \"0\",\n    receiver: Address.fromBech32(\"erd1qqqqqqqqqqqqqpgqknatrzgys8rmknnjxrn0vjue5sc5g4gnjpgsjeknhz\"),\n    sender: address,\n    gasPrice: 1000000000,\n    gasLimit: 2000000,\n    data: \"pay\",\n    chainID: \"D\",\n});\n\n// Sign the transaction\nawait userSigner.sign(transaction);\nconsole.log(\"Transaction signature\", transaction.getSignature().hex());\nconsole.log(\"Transaction hash\", transaction.getHash().hex());\n\n\n */\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/app.js"]();
/******/ 	
/******/ })()
;