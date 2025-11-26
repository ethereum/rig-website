---
title: "EIP-8068: Neutral effective balance design"
authors:
  - Anders Elowsson
tags:
  - consensus
  - eip
datePublished: 2025-10-30
---

[Read full post on ethereum-magicians.org](https://ethereum-magicians.org/t/eip-8068-neutral-effective-balance-design/26015)

## Abstract

This EIP proposes a neutral effective balance (EB) design to ensure `0x01` (skimming) and `0x02` (compounding) validators receive equal yields. Currently, validators that compound their balance have poor capital efficiency and lower yields as their idle balance (not contributing to EB) is 0.75 ETH, significantly higher than that of skimming validators at near-zero. This disincentivizes stake consolidation critical to Ethereum's fast finality roadmap. Additionally, the current hysteresis rules allow `0x02` validators to game the hysteresis by keeping their balance below the EB. The increased profitability at lower balances could further harm consolidation. This proposal sets the EB hysteresis upward threshold to the neutral +0.5 and the downward threshold to +0.25. To prevent gaming after operations like partial withdrawals, the EB is reset to the floor of the balance, and a one-time `temporary_upward_threshold` set. This threshold is derived from an integral equation that ensures the average idle balance is zero as the validator's balance compounds up to the next integer.
