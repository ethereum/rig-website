---
title: Agent-Based Modelling of Ethereum Consensus
authors:
  - Benjamin Kraner
  - Nicolò Vallarano
  - Claudio J. Tessone
  - Caspar Schwarz-Schilling
tags:
  - consensus
  - simulations
datePublished: 2023-05-23T10:29:25.000Z
publicationVenue: IEEE ICBC 2023
image: Screenshot_2023-05-28_at_23.11.10.png
---

## Abstract

This paper presents a study of the Poof-of-Stake (PoW) Ethereum consensus protocol, following the recent switch from Proof-of-Work (PoS) to Proof-of-Stake within Merge upgrade. The new protocol has resulted in reduced energy consumption and a shift in economic incentives, but it has also introduced new threat sources such as chain reorganizations and balancing attacks. Using a simple and flexible agent-based model, this study employs a time-continuous simulation algorithm to analyze the evolution of the blocktree and assess the impact of initial conditions on consensus quality. The model simulates validator node behavior and the information propagation throughout the peer-to-peer network of validators to analyze the resulting blockchain structure. Key variables in the model include the topology of the peer-to-peer network and average block and attestation latencies. Metrics to evaluate consensus quality are established, and means to observe the model's responsiveness to changes in parameters are provided. The simulations reveal a phase transition in which the system switches from a consensus state to a non-consensus state, with a theoretical justification presented for this observation.

[Go to article](https://arxiv.org/abs/2305.13906)
