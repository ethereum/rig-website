---
title: "EIP-7918: Blob base fee bounded by execution cost"
authors:
  - anders
tags:
  - resource-pricing
  - eip
datePublished: 2025-03-26
---

[Read full post on ethereum-magicians.org](https://ethereum-magicians.org/t/eip-7918-blob-base-fee-bounded-by-execution-cost/23271)


## Abstract
This EIP assigns a reserve price `BLOB_BASE_COST * base_fee_per_gas` to blobs by introducing an `if`-clause in `calc_excess_blob_gas()`. Specifically, when the reserve price is higher than `GAS_PER_BLOB * base_fee_per_blob_gas`, the function will not subtract `TARGET_BLOB_GAS_PER_BLOCK` from `excess_blob_gas`, instead imposing `excess_blob_gas` to increase according to `blob_gas_used`, but rebalanced to maintain the same maximum increase. The proposal ensures that the blob fee market can function properly and that blob consumers pay at least a relevant fraction of the market rate for the compute they request from nodes.
