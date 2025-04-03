export const isExternal = (href: string): boolean =>
  href.includes("http") || href.includes("mailto:") || href.includes("ipfs")

export const isHash = (href: string): boolean => href.startsWith("#")
