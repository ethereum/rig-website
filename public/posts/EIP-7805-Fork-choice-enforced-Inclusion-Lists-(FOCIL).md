---
title: "EIP-7805: Fork-choice enforced Inclusion Lists (FOCIL)"
authors:
  - thomas
  - francesco
  - julian
  - barnabe
  - potuz
  - Terence Tsao
  - Jacob Kaufman
  - Jihoon Song
tags:
  - consensus
  - eip
datePublished: 2024-11-01
---

[Read full EIP on eips.ethereum.org](https://eips.ethereum.org/EIPS/eip-7805)


## Abstract
FOCIL implements a robust mechanism to preserve Ethereum’s censorship resistance properties by guaranteeing timely transaction inclusion.

FOCIL (Fork-choice enforced Inclusion Lists) is built in a few simple steps:
* In each slot, a set of validators is selected as inclusion list (IL) committee members. Each member builds and gossips one IL according to their subjective view of the mempool.
* The proposer and all attesters of the next slot monitor, store and forward available ILs.
* The proposer (or the builder if the block is not built locally by the proposer) includes transactions from all collected ILs in its block. The proposer then broadcasts the block including IL transactions to the rest of the network.
* Attesters only vote for the proposer’s block if it includes transactions from all stored ILs.
