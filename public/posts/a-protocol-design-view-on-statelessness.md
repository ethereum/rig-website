---
title: A Protocol Design View on Statelessness
authors:
  - julian
tags:
  - protocol-development
  - scaling
datePublished: 2025-04-01T12:00:00.000Z
---

## tl;dr:

State in Ethereum is the data that contains all account balances, account nonces, contract bytecode, and contract storage. As new accounts and contracts are added to Ethereum and existing contracts write more storage, the state grows. A crucial role that validators perform is attesting: issuing votes indicating whether a block is valid and should be finalized. A large state size is problematic because attesters cannot be expected to store too much data, and state access becomes more computationally expensive. The current Ethereum protocol needs attesters to store the state because, without it, attesters cannot independently perform their core duty: verify whether a block is valid.

## View article

[View article on https://ethresear.ch](https://ethresear.ch/t/a-protocol-design-view-on-statelessness/22060)
