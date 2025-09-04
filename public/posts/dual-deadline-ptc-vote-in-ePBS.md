---
title: Dual-deadline PTC vote in ePBS
authors:
  - Anders Elowsson
tags:
  - protocol-development
  - consensus
datePublished: 2025-06-27
---

[Read full article on ethereum.org](https://notes.ethereum.org/@anderselowsson/Dual-deadlinePTCvote)

## Abstract
This post explores the idea of assigning dual deadlines to the payload timeliness committee (PTC) in ePBS. The payload is required to arrive early in the slot to allow sufficient execution time, while blob data is given a later deadline to accommodate longer propagation. This staggering of deadlines makes it possible to efficiently use most of the slot for execution, blob propagation, and attestation aggregation 