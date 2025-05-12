---
title: "Delayed Execution with zkVMs"
authors:
  - julian
  - Kevaundray Wedderburn
tags:
  - execution
datePublished: 2025-05-10
---

[Read full post on ethresear.ch](https://ethresear.ch/t/delayed-execution-with-zkvms/22308)

## Abstract
Delayed execution is a proposed upgrade to Ethereum that helps to increase the gas limit. Instead of needing to execute the block before attesting, with delayed execution, attesters pass simple checks on the block **and vote for it before executing the transactions. Changing the current EVM with a zkVM is another proposed Ethereum upgrade to increase the gas limit. With a zkVM, attesters only need to verify a succinct proof that the block was validly executed. This post explores the interaction between delayed execution and zkVMs. Note that one of the main goals of delayed execution is to facilitate zkVM proving on Ethereum L1.

**We propose assigning the responsibility of proving the correct execution of block n to the builder of that block, but enabling that builder to force-include the proof in the block of slot n+1.**
