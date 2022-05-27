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

console.log(user)



// ======== Execute all promises in order to post transactions and fetch them ======== //
conn.searchAssets('assiduité')
    .then(assets => console.log('Found assets with serial number :', assets[0].data.dataassiduité)) // eslint-disable-line no-console





