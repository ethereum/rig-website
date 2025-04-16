---
title: "Breaking the Balance of Power: Commitment Attacks on Ethereum's Reward Mechanism"
authors:
  - Roozbeh Sarenche
  - Ertem Nusret Tas
  - Barnabé Monnot
  - Caspar Schwarz-Schilling
  - Bart Preneel
tags:
  - consensus
  - game theory
datePublished: 2024-07-28T12:00:00.000Z
publicationVenue:
image: Screenshot_2024-08-05_at_11.38.05.png
---

## Abstract

Validators in permissionless, large-scale blockchains (e.g., Ethereum) are typically payoff-maximizing, rational actors. Ethereum relies on in-protocol incentives, like rewards for validators delivering correct and timely votes, to induce honest behavior and secure the blockchain. However, external incentives, such as the block proposer's opportunity to capture maximal extractable value (MEV), may tempt validators to deviate from honest protocol participation.

We show a series of commitment attacks on LMD GHOST, a core part of Ethereum's consensus mechanism. We demonstrate how a single adversarial block proposer can orchestrate long-range chain reorganizations by manipulating Ethereum's reward system for timely votes. These attacks disrupt the intended balance of power between proposers and voters: by leveraging credible threats, the adversarial proposer can coerce voters from previous slots into supporting blocks that conflict with the honest chain, enabling a chain reorganization at no cost to the adversary. In response, we introduce a novel reward mechanism that restores the voters' role as a check against proposer power. Our proposed mitigation is fairer and more decentralized -- not only in the context of these attacks -- but also practical for implementation in Ethereum.

[Go to article](https://arxiv.org/abs/2407.19479)
