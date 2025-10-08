---
title: "EIP-8037: State Creation Gas Cost Increase"
authors:
  - Maria Silva
  - Carlos Perez
  - Jochem Brouwer
  - Ansgar Dietrichs
tags:
  - resource-pricing
  - eip
datePublished: 2025-10-01
---

[Read full post on ethereum-magicians.org](https://ethereum-magicians.org/t/eip-8037-state-creation-gas-cost-increase/25694)

## Abstract

This proposal increases the cost of state creation operations, thus avoiding excessive state growth under increased block gas limits. It sets a unit cost per new state byte that targets an average state growth of 60 GiB per year at a block gas limit of 300M gas units and an average gas utilization for state growth of 30%. Contract deployments get a 10x cost increase while new accounts get a 8.5x increase. Deployments of duplicated do not pay deposit costs. To avoid limiting the maximum contract size that can be deployed, it also introduces an independent metering for code deposit costs.
