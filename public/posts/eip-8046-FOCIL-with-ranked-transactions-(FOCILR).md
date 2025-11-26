---
title: "EIP-8046: FOCIL with ranked transactions (FOCILR)"
authors:
  - Anders Elowsson
tags:
  - consensus
  - eip
datePublished: 2025-10-17
---

[Read full post on ethereum-magicians.org](https://ethereum-magicians.org/t/eip-8046-focil-with-ranked-transactions-focilr/25844)

## Abstract

FOCIL with ranked transactions (FOCILR) offers strong censorship resistance (CR) by not allowing the builder to circumvent propagated inclusion lists (ILs) when the block is full. Each transaction is ranked based on the ranking fee it offers to pay. No transaction is allowed to displace an IL transaction if the IL transaction passes regular inclusion criteria and offers a higher ranking fee per gas. All transactions pay the minimum required clearing fee, corresponding to the highest ranking fee offered by any IL transaction excluded from the block, and this fee is burned. FOCILR provides CR to time-sensitive transactions, promotes fairness, and prevents cheap block-stuffing under a multidimensional fee market. It is specified as an extension to FOCIL (EIP-7805), which must also be adopted at the latest at the same hardfork.
