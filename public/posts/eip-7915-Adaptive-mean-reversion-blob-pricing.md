---
title: "EIP-7915: Adaptive mean reversion blob pricing"
authors:
  - anders
tags:
  - resource-pricing
  - eip
datePublished: 2025-03-23
---

[Read full EIP on eips.ethereum.org](https://eips.ethereum.org/EIPS/eip-7915)


## Abstract
Reworks the excess blob gas update in `calc_excess_blob_gas()` so that the blob base fee rises relatively more during high gas usage than it falls during low usage whenever the current fee is below the long-run average. This establishes a smoothly adapting, neutral lower bound for the base fee. The exponential moving average (EMA) is computed in the linear domain and stored as a header variable.
