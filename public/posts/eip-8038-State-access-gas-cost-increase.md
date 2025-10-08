---
title: "EIP-8038: State-access gas cost increase"
authors:
  - Maria Silva
  - Wei Han Ng
  - Ansgar Dietrichs
tags:
  - resource-pricing
  - eip
datePublished: 2025-10-03
---

[Read full post on ethereum-magicians.org](https://ethereum-magicians.org/t/eip-8038-further-increase-in-state-access-costs/25693)

## Abstract

This EIP updates the gas cost of state-access operations to reflect Ethereum’s larger state and the consequent slowdown of these operations. It raises the base costs for `GAS_STORAGE_UPDATE`, `GAS_COLD_SLOAD`, and `GAS_COLD_ACCOUNT_ACCESS` and updates the access cost for `EXTCODESIZE` and `EXTCODECOPY`. The design coordinates with EIP-8032: before EIP-8032, parameters assume worst-case contract size; after EIP-8032, they assume worst-case up to `ACTIVATION_THRESHOLD`, with additional depth-based scaling beyond.
