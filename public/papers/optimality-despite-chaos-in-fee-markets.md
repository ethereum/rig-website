---
title: Optimality Despite Chaos in Fee Markets
authors:
  - Stefanos Leonardos
  - Daniël Reijsbergen
  - Barnabé Monnot
  - Georgios Piliouras
tags:
  - resource pricing
datePublished: 2022-12-14T11:59:51.000Z
publicationVenue: FC 2023
image: Screenshot_2023-05-28_at_23.15.24.png
---

## Abstract

Transaction fee markets are essential components of blockchain economies, as they resolve the inherent scarcity in the number of transactions that can be added to each block. In early blockchain protocols, this scarcity was resolved through a first-price auction in which users were forced to guess appropriate bids from recent blockchain data. Ethereum's EIP-1559 fee market reform streamlines this process through the use of a base fee that is increased (or decreased) whenever a block exceeds (or fails to meet) a specified target block size. Previous work has found that the EIP-1559 mechanism may lead to a base fee process that is inherently chaotic, in which case the base fee does not converge to a fixed point even under ideal conditions. However, the impact of this chaotic behavior on the fee market's main design goal -- blocks whose long-term average size equals the target -- has not previously been explored. As our main contribution, we derive near-optimal upper and lower bounds for the time-average block size in the EIP-1559 mechanism despite its possibly chaotic evolution. Our lower bound is equal to the target utilization level whereas our upper bound is approximately 6% higher than optimal. Empirical evidence is shown in great agreement with these theoretical predictions. Specifically, the historical average was approximately 2.9% larger than the target rage under Proof-of-Work and decreased to approximately 2.0% after Ethereum's transition to Proof-of-Stake. We also find that an approximate version of EIP-1559 achieves optimality even in the absence of convergence.

[Go to article](https://arxiv.org/abs/2212.07175)
