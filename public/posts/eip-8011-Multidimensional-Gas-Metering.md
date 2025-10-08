---
title: "EIP-8011: Multidimensional Gas Metering"
authors:
  - Maria Silva
  - Davide Crapis
  - Anders Elowsson
  - Toni Wahrstätter
tags:
  - resource-pricing
  - eip
datePublished: 2025-08-22
---

[Read full post on ethereum-magicians.org](https://ethereum-magicians.org/t/eip-8011-multidimensional-gas-metering/25260)

## Abstract

This proposal introduces multidimensional gas metering, changing the way we account for gas used at the block level. This enables Ethereum to increase throughput and better control excessive resource usage, with minimal changes to the protocol and the UX. During transaction execution, gas is metered for each resource dimension, such as compute and state. At the transaction level, everything remains unchanged. A transaction still pays fees according to the sum of gas used across all resources and still has a single gas limit imposed on this same sum. However, at the block level, only the gas used in the bottleneck resource is considered when checking if the block is full and when updating the base fee for the next block. This gives a new meaning to the block’s gas limit and the block’s gas target, which now corresponds to the maximum gas that can be metered in the bottleneck resource.
