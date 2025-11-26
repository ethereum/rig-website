---
title: "EIP-8062: Add sweep withdrawal fee for 0x01 validators"
authors:
  - Anders Elowsson
  - Toni Wahrstätter
  - Francesco D'Amato
  - Ben Adams
  - Maria Silva
tags:
  - consensus
  - eip
datePublished: 2025-10-29
---

[Read full post on ethereum-magicians.org](https://ethereum-magicians.org/t/eip-8062-add-sweep-withdrawal-fee-for-0x01-validators/26003)

## Abstract

A fee is proposed on the partial beacon chain "sweep" withdrawal of validators using `0x01` credentials to improve stake consolidation and fairness. Ethereum's fast finality roadmap hinges on staking service providers migrating from `0x01` validators to `0x02` compounding validators. One roadblock is that `0x01` validators receive free-of-charge sweep withdrawals for balances exceeding 32 ETH, which consume protocol resources that are not accounted for. To address this, a 0.05% fee is imposed on the partial `0x01` sweep using a minimal modification to `process_withdrawals()`, applying the new constant `WITHDRAWAL_FEE_FRACTION = 2000`.
