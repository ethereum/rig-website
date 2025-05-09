---
title: "Your Post Title"
authors:
  - anders
tags:
  - resource-pricing
  - eip
datePublished: 2025-03-26
---

https://ethereum-magicians.org/t/eip-7918-blob-base-fee-bounded-by-execution-cost/23271

## Abstract
This EIP imposes that the price of the targeted number blobs `TARGET_BLOB_GAS_PER_BLOCK * base_fee_per_blob_gas` stays above the price of a simple blob-carrying transaction `TX_BASE_COST * base_fee_per_gas`. This ensures that the blob fee auction can function properly, because the equilibrium always forms relative to the fee that carries the price signal. The proposed `if` statement to check fee parity in `calc_excess_blob_gas()` represents a neutral, simple, and future-proof resolution to current blob fee auction idiosyncrasies.
