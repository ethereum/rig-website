---
title: "The paths of least resistance: Introducing WFR-Gossip"
authors:
  - thomas
tags:
  - protocol-development
  - scaling
  - p2p 
datePublished: 2025-06-26T12:00:00.000Z
---

## tl;dr:

Classic Gossipsub floods the network with many duplicates, wasting bandwidth. Wasserstein-Fisher-Rao (WFR) Gossip addresses this by treating propagation as an optimal-transport problem: nodes forward messages preferentially along lower-latency links. In simulations with 10,000 nodes, WFR-Gossip reduced bandwidth usage by ~50% and improved latency by 40%, maintaining over 95% network coverage.

## View article

[View article on https://ethresear.ch/t/the-paths-of-least-resistance-introducing-wfr-gossip/22671/1)
