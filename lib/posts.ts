export const getPostURL = (filePath: string) =>
  filePath.replace(/^public|\.md$/g, "")
