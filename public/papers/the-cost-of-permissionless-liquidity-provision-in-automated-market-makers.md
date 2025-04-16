---
title: The Cost of Permissionless Liquidity Provision in Automated Market Makers
authors:
  - Julian Davide Crapis
tags:
  - game theory
  - mev
datePublished: 2024-02-28T11:37:09.000Z
publicationVenue: MARBLE 2024
image: Screenshot_2024-03-03_at_16.41.22.png
---

## Abstract

Automated market makers (AMMs) allocate fee revenue \textit{proportional} to the amount of liquidity investors deposit. In this paper, we study the economic consequences of the competition between passive liquidity providers (LPs) caused by this allocation rule. We employ a game-theoretic model in which N strategic agents optimally provide liquidity and two types of liquidity traders trade. In this setting, we find that competition drives LPs to provide excess liquidity. Excess liquidity is costly as more capital is exposed to adverse selection costs. One of our main results is that the price of anarchy, defined over the liquidity provider performance, is O(N), implying that the welfare loss scales linearly with the number of liquidity providers. This inefficient capital allocation is masked when considering the welfare of elastic liquidity traders as the total price of anarchy is O(1). Since this result is driven by elastic liquidity traders benefiting from the liquidity provided because of inelastic liquidity traders, we show that different types of liquidity traders complement each other. Finally, we show that AMM designs that reduce the arbitrage intensity per unit of liquidity do increase utility for liquidity traders but importantly not for LPs nor do they necessarily decrease total arbitrage volume.

[Go to article](https://arxiv.org/abs/2402.18256)
