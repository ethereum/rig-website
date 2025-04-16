---
title: Three Attacks on Proof-of-Stake Ethereum
authors:
  - Caspar Schwarz-Schilling
  - Joachim Neu
  - Barnabé Monnot
  - Aditya Asgaonkar
  - Ertem Nusret Tas
  - David Tse
tags:
  - consensus
  - mev
datePublished: 2021-10-19T16:27:13.000Z
publicationVenue: FC 2022
image: Screenshot_2023-05-28_at_23.16.32.png
---

## Abstract

Recently, two attacks were presented against Proof-of-Stake (PoS) Ethereum: one where short-range reorganizations of the underlying consensus chain are used to increase individual validators' profits and delay consensus decisions, and one where adversarial network delay is leveraged to stall consensus decisions indefinitely. We provide refined variants of these attacks, considerably relaxing the requirements on adversarial stake and network timing, and thus rendering the attacks more severe. Combining techniques from both refined attacks, we obtain a third attack which allows an adversary with vanishingly small fraction of stake and no control over network message propagation (assuming instead probabilistic message propagation) to cause even long-range consensus chain reorganizations. Honest-but-rational or ideologically motivated validators could use this attack to increase their profits or stall the protocol, threatening incentive alignment and security of PoS Ethereum. The attack can also lead to destabilization of consensus from congestion in vote processing.

[Go to article](https://arxiv.org/abs/2110.10086)
