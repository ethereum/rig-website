import { TAGS } from "@/lib/constants"
import type { Tag } from "@/lib/types"

type Field = {
  key: Tag
  description: string
}
export const researchFields: Field[] = [
  {
    key: "consensus",
    description:
      "Research on consensus mechanisms, focusing on the design, analysis, and optimization of protocols that ensure agreement among distributed participants in a blockchain network.",
  },
  {
    key: "data",
    description:
      "Focuses on the collection, analysis, and interpretation of blockchain data to inform research and development decisions, identify patterns, and validate theoretical models.",
  },
  {
    key: "mev",
    description:
      "Refers to the maximum value that can be extracted from block production in excess of the standard block reward and gas fees by including, excluding, or reordering transactions within a block.",
  },
  {
    key: "pbs",
    description:
      "A blockchain architecture where block proposal and block building are separated into distinct roles to mitigate centralization risks and improve network efficiency.",
  },
  {
    key: "protocol-development",
    description:
      "The process of designing, implementing, and upgrading blockchain protocols to improve security, scalability, and functionality while maintaining backward compatibility.",
  },
  {
    key: "resource-pricing",
    description:
      "The study and implementation of mechanisms to efficiently price computational resources on blockchain networks, including gas fees, priority fees, and other economic incentives.",
  },
  {
    key: "simulations",
    description:
      "The use of computational models to simulate blockchain network conditions, validator behavior, and economic incentives to predict outcomes and test hypotheses before implementation.",
  },
  {
    key: "crypto-ai",
    description:
      "The intersection of cryptography, blockchain technology, and artificial intelligence, exploring how these technologies can complement each other in decentralized systems.",
  },
  {
    key: "cryptography",
    description:
      "The study and application of mathematical techniques for securing communications, transactions, and data in blockchain systems, including zero-knowledge proofs, signature schemes, and hash functions.",
  },
  {
    key: "el",
    description:
      "Research related to Ethereum's execution layer, which handles state transitions, smart contract execution, and transaction processing.",
  },
  {
    key: "game-theory",
    description:
      "The application of economic principles and game theory models to analyze and design incentive mechanisms in blockchain networks that align participant behaviors with protocol goals.",
  },
  {
    key: "scaling",
    description:
      "Research on technologies and methods to increase blockchain transaction throughput and reduce costs, with a focus on layer-2 solutions like rollups that inherit security from the base layer.",
  },
]
