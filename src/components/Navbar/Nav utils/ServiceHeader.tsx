export function ServiceHeader({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-zinc-300">
        <Icon className="h-5 w-5" />
      </div>

      <div className="min-w-0">
        <h3 className="text-[14px] font-semibold leading-snug tracking-[-0.01em] text-white">
          {title}
        </h3>

        <p className="mt-2 text-[11px] leading-[1.7] text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}
