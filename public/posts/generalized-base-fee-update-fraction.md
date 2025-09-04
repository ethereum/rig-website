---
title: Generalized base fee update fraction
authors:
  - Anders Elowsson
tags:
  - resource-pricing
  - protocol-development
datePublished: 2025-08-28
---

[Read full article on ethresear.ch](https://ethresear.ch/t/generalized-base-fee-update-fraction/22988)

## Abstract
Ethereum’s blob base fee relies on an update fraction constant, re-specified in each EIP that adjusts the target blob gas. This post shows that both EIP-4844 and EIP-7691 can be unified under a simple generalization, with the update fraction expressed as $b = m / (2 \ln 1.125)$, where $m$ is the max blob gas per block. The generalized form preserves the intended percentage changes across any max:target ratios and exhibits a complementary-ratio symmetry. Finally, it provides a natural bridge to the gas normalization architecture of EIP-7999, where the same fee change factor emerges more directly.