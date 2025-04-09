export const Authors = ({ authors }: { authors: string[] }) => (
  <p className="text-card-foreground font-sans text-sm">
    {new Intl.ListFormat("en", {
      style: "long",
      type: "conjunction",
    }).format(authors.map((author) => author))}
  </p>
)
