---
title: "An analysis of attestation timings in a 6-s slot"
authors:
  - Maria Silva
tags:
  - protocol-development
datePublished: 2025-09-03
---
[Read full article on ethresear.ch](https://ethresear.ch/t/an-analysis-of-attestation-timings-in-a-6-s-slot/)

## tldr 
This analysis looks into arrival times for blocks and attestations and covers 1 week of Ethereum slots from early August 2025. It aims to assess the feasibility of EIP-7782, which proposes reducing the slot to 6 seconds by setting the attestation deadline to 3 seconds and the aggregation deadline to 4.5 seconds.

Blocks generally arrive close to the attestation deadline (the 95th percentile is 3.3s). However, the pure block propagation time (defined as the time elapsed since the block was published by a relay) is under 1 second. In a sample of slots where the block came from Ultrasound, Flashbots, or Titan, the 95th percentile is around 800ms. This suggests that the start of the slot is not being used solely for block propagation, and there is likely some slack in the attestation timings within the current slot structure.

Attestations for missed slots, which reveal pure propagation times, arrive on average 831ms after the 4s mark. Subnet supermajorities form in under 830ms, while the 95th percentile takes 1962ms.

For slots where the header originated from a relay, attestations arrive in less than 4.5 seconds after the block was published by the relay (still below the proposed 4.5-second aggregation deadline for six-second slots). The distribution is bi-modal, with modes around 1.2s and 3s. The source of the two modes is the entity making the attestation. This can be due to network connectivity, attesting strategies, or misconfigurations.

Validator entities are the strongest drivers of late attestations. Some operators consistently report later than others, and a single misconfigured entity can significantly skew the results. Block content also matters: higher gas use and more blobs increase the odds of lateness.
