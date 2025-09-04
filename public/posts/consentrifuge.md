---
title: Consentrifuge
authors:
  - Anders Elowsson
tags:
  - consensus
  - protocol-development
datePublished: 2025-02-22
---

[Read full article on ethereum.org](https://notes.ethereum.org/@anderselowsson/Consentrifuge)

## Abstract
What would a staking setup that prioritizes faster block times look like? One way is to skip the aggregation step for the available chain, which can then progress at a faster pace than the finality gadget. In Consentrifuge, the maxEB is removed or increased significantly, and the available chain uses fewer validators with a core of big validators, such that a reasonable stake-weight can be achieved without aggregation. The available chain progresses as fast as possible, building blocks and voting on them, with the attester set rotating slowly to avoid known pitfalls of LMD GHOST. The finality gadget uses aggregation and only finalizes a subset of block check-points.
