// Copyright BigchainDB GmbH and BigchainDB contributors
// SPDX-License-Identifier: (Apache-2.0 AND CC-BY-4.0)
// Code is Apache-2.0 and docs are CC-BY-4.0

/* eslint-disable import/no-unresolved */

const driver = require('bigchaindb-driver')
require('dotenv').config()

// ======== Preparation ======== //
const conn = new driver.Connection('https://test.ipdb.io/api/v1/', {
    header1: 'header1_value',
    header2: 'header2_value'
})

const user = new driver.Ed25519Keypair()
user.privateKey = 'BY7TEWD3hRUfSYsbNXPzf4fs1FHuJFBD9SbzFAmcmT8T'
user.publicKey= '8fBYNwF2NVKjs2H6aKSA9ndizqrmYgQZTxXTfageXZX4'
console.log(user)


const assetdata = require('./Data/employeedata.json');



const metadata = { 'type': 'employee' }
console.log(assetdata)

// ======== Create Transaction ======== //
const txCreateAliceSimple = driver.Transaction.makeCreateTransaction(
    assetdata,
    metadata,
    [
        driver.Transaction.makeOutput(driver.Transaction.makeEd25519Condition(user.publicKey))
    ],
    user.publicKey
)


const txCreateAliceSimpleSigned =
    driver.Transaction.signTransaction(txCreateAliceSimple, user.privateKey)

// ======== Post Transaction and Fetch Result ======== //
conn.postTransactionCommit(txCreateAliceSimpleSigned)


// ======== Search Asset by Serial Number ======== //
    .then(() => conn.searchAssets('dataemployee'))
    .then(assets => console.log('Found assets with serial number :', assets)) // eslint-disable-line no-console


