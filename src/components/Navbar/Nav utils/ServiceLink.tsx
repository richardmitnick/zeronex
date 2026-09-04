type HoverColor = "green" | "blue" | "red";

const hoverColors: Record<
  HoverColor,
  {
    text: string;
    icon: string;
  }
> = {
  green: {
    text: "hover:text-green-400",
    icon: "group-hover:text-green-400",
  },
  blue: {
    text: "hover:text-blue-400",
    icon: "group-hover:text-blue-400",
  },
  red: {
    text: "hover:text-red-400",
    icon: "group-hover:text-red-400",
  },
};

export function ServiceLink({
  icon: Icon,
  text,
  hideIcon = false,
  hoverColor = "green",
}: {
  icon: React.ElementType;
  text: string;
  hideIcon?: boolean;
  hoverColor?: HoverColor;
}) {
  const color = hoverColors[hoverColor];

  return (
    <button
      type="button"
      className={`group flex min-h-12 w-full cursor-pointer items-center gap-3 rounded-lg px-1.5 text-left text-[12px] text-zinc-300 transition-all duration-200  ${color.text}`}
    >
      {!hideIcon ? (
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center text-zinc-400 transition-colors duration-200 ${color.icon}`}
        >
          <Icon className="h-4.25 w-4.25" />
        </div>
      ) : (
        <div className="h-8 w-8 shrink-0" />
      )}

      <span>{text}</span>
    </button>
  );
}
