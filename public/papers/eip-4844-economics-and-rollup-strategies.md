---
title: EIP-4844 Economics and Rollup Strategies
authors:
  - Davide Crapis
  - Edward W. Felten
  - Akaki Mamageishvili
tags:
  - resource pricing
  - scaling / rollups
datePublished: 2023-10-02T12:41:36.000Z
publicationVenue:
image: eip-4844-economics-and-rollup-strategies.webp
---

## Abstract

We study the economics of the Ethereum improvement proposal 4844 and its effect on rollups' data posting strategies. Rollups' cost consists of two parts: data posting and delay. In the new proposal, the data posting cost corresponds to a blob posting cost and is fixed in each block, no matter how much of the blob is utilized by the rollup. The tradeoff is clear: the rollup prefers to post a full blob, but if its transaction arrival rate is low, filling up a blob space causes too large delay cost. The first result of the paper shows that if a rollup transaction arrival rate is too low, it prefers to use the regular blockspace market for data posting, as it offers a more flexible cost structure. Second, we show that shared blob posting is not always beneficial for participating rollups and change in the aggregate blob posting cost in the equilibrium depends on the types of participating rollups. In the end, we discuss blob cost-sharing rules from an axiomatic angle.

[Go to article](https://arxiv.org/abs/2310.01155)
