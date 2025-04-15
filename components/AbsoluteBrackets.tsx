type AbsoluteBracketsProps = {
  orientation?: "vertical" | "horizontal"
  pixels?: number
}

const AbsoluteBrackets = ({
  orientation = "vertical",
  pixels = 4,
}: AbsoluteBracketsProps) => {
  return (
    <div
      className="border-primary absolute inset-x-0 top-1 -bottom-0.5 border-2 opacity-0 transition-opacity group-hover:opacity-100"
      style={{
        clipPath:
          orientation === "vertical"
            ? `polygon(0 0, 100% 0, 100% ${pixels}px, 0 ${pixels}px, 0 calc(100% - ${pixels}px), 100% calc(100% - ${pixels}px), 100% 100%, 0 100%)`
            : `polygon(0 0, ${pixels}px 0, ${pixels}px 100%, 0 100%, calc(100% - ${pixels}px) 100%, calc(100% - ${pixels}px) 0, 100% 0, 100% 100%)`,
      }}
    />
  )
}

export default AbsoluteBrackets
