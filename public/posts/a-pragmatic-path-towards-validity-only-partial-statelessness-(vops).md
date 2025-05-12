---
title: "A pragmatic path towards Validity-Only Partial Statelessness (VOPS)"
authors:
  - Thomas Thiery
tags:
  - execution
  - protocol-development
datePublished: 2025-04-29T12:00:00.000Z
---

[Read full article on ethresear.ch](https://ethresear.ch/t/a-pragmatic-path-towards-validity-only-partial-statelessness-vops/22236)

We argue that:
* Weak statelessness alone cannot guarantee strong censorship resistance.
* Future designs must revisit **strong statelessness**, and address practical questions, such as who generates these proofs, what types of proofs are most efficient, and how bandwidth and proving costs impact node requirements.
* In the meantime, **Validity-Only Partial Statelessness (VOPS)** offers a simple and effective bridge: reducing local storage by 25x while preserving a functional, censorship-resistant public mempool.
* **AA-VOPS** extends VOPS to support full native account abstraction, offering a path toward strong statelessness by minimizing witness overhead through local caching and incremental updates.
