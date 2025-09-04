---
title: "EIP-7999: Unified multidimensional fee market"
authors:
  - Anders Elowsson
  - Vitalik Buterin
tags:
  - resource-pricing
  - eip
datePublished: 2025-08-05
---

[Read full post on ethereum-magicians.org](https://ethereum-magicians.org/t/eip-7999-unified-multidimensional-fee-market/25010)


## Abstract
A unified multidimensional fee market is introduced, where each transaction specifies the maximum amount of ETH it is willing to pay for inclusion using a single `max_fee`. Upon inclusion, the protocol ensures that the transaction is able to pay the gas for all dimensions, treating the `max_fee` as fungible across resources. This enables a more efficient use of capital, and enshrines the same representation that users have when they interact with Ethereum. The fee market is further unified in terms of a single update fraction under a single fee update mechanism, generalized reserve pricing, and a gas normalization that retains current percentage ranges while keeping the price stable whenever a gas limit changes. Calldata is proposed as the first resource to be added, with avenues for facilitating gas fungibility for EVM resources considered for further expansion.
