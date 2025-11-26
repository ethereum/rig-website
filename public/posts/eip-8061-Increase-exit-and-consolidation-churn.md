---
title: "EIP-8061: Increase exit and consolidation churn"
authors:
  - Francesco D'Amato
  - Anders Elowsson
tags:
  - consensus
  - eip
datePublished: 2025-10-28
---

[Read full post on ethereum-magicians.org](https://ethereum-magicians.org/t/eip-8061-increase-churn-limits/25991)

## Abstract

This EIP roughly doubles the consolidation churn, as well as quadrupling the exit churn and restoring its proportionality to total stake (though maintaining the existing cap on activations). Moreover, it routes exits through the consolidation queue when it is shorter than the exit queue (but not viceversa!), increasing the maximum exit throughput by another 75%. The choice of parameters balances maintaining a sufficiently long weak subjectivity period (~7 days, roughly halving the current period) with achieving two goals: allowing for faster consolidation of the validator set, in turn accelerating the timeline to faster finality, and relieving exit queue congestion, improving staking liquidity.
