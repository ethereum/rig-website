---
title: "EIP-7762: Increase MIN_BASE_FEE_PER_BLOB_GAS"
authors:
  - Max Resnick
  - Davide Crapis
  - Ansgar Dietrichs
tags:
  - resource-pricing
  - eip
datePublished: 2024-08-31
---

[Read full EIP on eips.ethereum.org](https://eips.ethereum.org/EIPS/eip-7762)


## Abstract
This EIP proposes an increase to the `MIN_BASE_FEE_PER_BLOB_GAS` to speed up price discovery on blob space. It also resets the excess blob gas to 0, to avoid a blob basefee spike.
