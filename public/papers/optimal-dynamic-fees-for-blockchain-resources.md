---
title: Optimal Dynamic Fees for Blockchain Resources
authors:
  - Davide Crapis
  - Ciamac C. Moallemi
  - Shouqiao Wang
tags:
  - data
  - resource pricing
  - simulations
datePublished: 2023-09-22T09:34:33.000Z
publicationVenue:
image: Screenshot_2023-09-29_at_11.50.32.png
---

## Abstract

We develop a general and practical framework to address the problem of the optimal design of dynamic fee mechanisms for multiple blockchain resources. Our framework allows to compute policies that optimally trade-off between adjusting resource prices to handle persistent demand shifts versus being robust to local noise in the observed block demand. In the general case with more than one resource, our optimal policies correctly handle cross-effects (complementarity and substitutability) in resource demands. We also show how these cross-effects can be used to inform resource design, i.e. combining resources into bundles that have low demand-side cross-effects can yield simpler and more efficient price-update rules. Our framework is also practical, we demonstrate how it can be used to refine or inform the design of heuristic fee update rules such as EIP-1559 or EIP-4844 with two case studies. We then estimate a uni-dimensional version of our model using real market data from the Ethereum blockchain and empirically compare the performance of our optimal policies to EIP-1559.

[Go to article](https://arxiv.org/abs/2309.12735)
