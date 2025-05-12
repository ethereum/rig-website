---
title: "EIP-7732: Enshrined Proposer-Builder Separation"
authors:
  - barnabe
  - Francesco d'Amato
  - Michael Neuder
  - potuz
  - Terence Tsao
tags:
  - eip
  - pbs
datePublished: 2024-06-28
---

[Read EIP on eips.ethereum.org](https://eips.ethereum.org/EIPS/eip-7732)


## Abstract
This EIP fundamentally changes the way an Ethereum block is validated by decoupling the execution validation from the consensus validation both logically as well as temporally. It does so by introducing a new optional attribution (being a builder) and a new duty (submitting payload timeliness attestations) to Ethereum validators. The `ExecutionPayload` field of the `BeaconBlockBody` is removed and instead it is replaced by a signed commitment (a `SignedExecutionPayloadHeader` object) from a builder to later reveal the corresponding execution payload. This commitment specifies in particular the blockhash of the execution block and a value to be paid to the beacon block proposer. When processing the `BeaconBlock`, the committed value is deducted from the builder’s beacon chain balance and credited to the beacon block proposer. A subset of validators in the beacon committee is assigned to the Payload Timeliness Committee (PTC), these validators are tasked to attest (by broadcasting a `PayloadAttestationMessage`) to whether the corresponding builder has revealed the committed execution payload (with the right blockhash) in a timely fashion. PTC members are not required to validate the execution payload, execution validation is thus deferred until the next beacon block validation.
