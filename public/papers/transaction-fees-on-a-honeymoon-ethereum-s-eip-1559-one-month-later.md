---
title: "Transaction Fees on a Honeymoon: Ethereum’s EIP-1559 One Month Later"
authors:
  - Daniël Reijsbergen
  - Shyam Sridhar
  - Barnabé Monnot
  - Stefanos Leonardos
  - Stratis Skoulakis
  - Georgios Piliouras
tags:
  - data
  - resource pricing
  - simulations
datePublished: 2021-10-10T10:17:07.000Z
publicationVenue: IEEE Blockchain 2021
image: Screenshot_2023-05-28_at_23.17.32.png
---

## Abstract

Ethereum Improvement Proposal (EIP) 1559 was recently implemented to transform Ethereum's transaction fee market. EIP-1559 utilizes an algorithmic update rule with a constant learning rate to estimate a base fee. The base fee reflects prevailing network conditions and hence provides a more reliable oracle for current gas prices.

Using on-chain data from the period after its launch, we evaluate the impact of EIP-1559 on the user experience and market performance. Our empirical findings suggest that although EIP-1559 achieves its goals on average, short-term behavior is marked by intense, chaotic oscillations in block sizes (as predicted by our recent theoretical dynamical system analysis [1]) and slow adjustments during periods of demand bursts (e.g., NFT drops). Both phenomena lead to unwanted inter-block variability in mining rewards. To address this issue, we propose an alternative base fee adjustment rule in which the learning rate varies according to an additive increase, multiplicative decrease (AIMD) update scheme. Our simulations show that the latter robustly outperforms the EIP-1559 protocol under various demand scenarios. These results provide evidence that variable learning rate mechanisms may constitute a promising alternative to the default EIP-1559-based format and contribute to the ongoing discussion on the design of more efficient transaction fee markets.

[Go to article](https://arxiv.org/abs/2110.04753)
