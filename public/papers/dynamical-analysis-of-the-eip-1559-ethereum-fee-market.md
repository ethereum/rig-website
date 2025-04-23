---
title: Dynamical Analysis of the EIP-1559 Ethereum Fee Market
authors:
  - Stefanos Leonardos
  - Barnabé Monnot
  - Daniël Reijsbergen
  - Stratis Skoulakis
  - Georgios Piliouras
tags:
  - resource-pricing
  - simulations
datePublished: 2021-02-21T09:38:04.000Z
publicationVenue: AFT 2021
---

## Abstract

Participation in permissionless blockchains results in competition over system resources, which needs to be controlled with fees. Ethereum's current fee mechanism is implemented via a first-price auction that results in unpredictable fees as well as other inefficiencies. EIP-1559 is a recent, improved proposal that introduces a number of innovative features such as a dynamically adaptive base fee that is burned, instead of being paid to the miners. Despite intense interest in understanding its properties, several basic questions such as whether and under what conditions does this protocol self-stabilize have remained elusive thus far.

We perform a thorough analysis of the resulting fee market dynamic mechanism via a combination of tools from game theory and dynamical systems. We start by providing bounds on the step-size of the base fee update rule that suffice for global convergence to equilibrium via Lyapunov arguments. In the negative direction, we show that for larger step-sizes instability and even formally chaotic behavior are possible under a wide range of settings. We complement these qualitative results with quantitative bounds on the resulting range of base fees. We conclude our analysis with a thorough experimental case study that corroborates our theoretical findings.

[Go to article](https://arxiv.org/abs/2102.10567)
