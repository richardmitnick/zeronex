import { useState } from "react";

const DEVGUIDE_URL = "https://devguide-dev.vercel.app/";

export default function DevGuideBanner({
  setIsDevGuide,
}: {
  setIsDevGuide: (isDevGuide: boolean) => void;
}) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleRedirect = () => {
    window.open(DEVGUIDE_URL, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleRedirect();
    }
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsVisible(false);
    setIsDevGuide(false);
  };

  return (
    <div
      role="link"
      tabIndex={0}
      aria-label="Visit DevGuide"
      onClick={handleRedirect}
      onKeyDown={handleKeyDown}
      className="group fixed z-100 w-full cursor-pointer overflow-hidden border-b border-emerald-500/50 bg-black/95 text-zinc-300 backdrop-blur-md transition-colors duration-300 hover:bg-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500"
    >
      {/* Bottom glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-400/80 to-transparent"
      />

      <div className="mx-auto flex min-h-13 w-full max-w-[1920px] items-center gap-4 px-4 pr-12 sm:px-6 sm:pr-14 lg:gap-8 lg:px-8">
        {/* LOGO */}
        <div className="flex shrink-0 items-center">
          <span className="text-lg font-semibold tracking-[-0.04em] text-zinc-100 sm:text-xl">
            Dev
            <span className="text-emerald-400">Guide</span>
            <span className="text-emerald-400">_</span>
          </span>
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="hidden h-5 w-px bg-zinc-800 sm:block"
        />

        {/* MOVING MESSAGE */}
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="flex w-max animate-devguide-marquee whitespace-nowrap">
            <div className="flex shrink-0 items-center">
              <p className="px-8 text-xs leading-5 text-zinc-400 sm:text-sm">
                <span className="font-medium text-zinc-200">
                  Structured learning, now for playlists.
                </span>{" "}
                DevGuide turns scattered developer videos into a clear learning
                path.
              </p>

              <span className="text-emerald-400">•</span>
            </div>

            {/* Duplicate for seamless scrolling */}
            <div className="flex shrink-0 items-center" aria-hidden="true">
              <p className="px-8 text-xs leading-5 text-zinc-400 sm:text-sm">
                <span className="font-medium text-zinc-200">
                  Structured learning, now for playlists.
                </span>{" "}
                DevGuide turns scattered developer videos into a clear learning
                path.
              </p>

              <span className="text-emerald-400">•</span>
            </div>

            {/* Extra duplicate prevents empty space on wide screens */}
            <div className="flex shrink-0 items-center" aria-hidden="true">
              <p className="px-8 text-xs leading-5 text-zinc-400 sm:text-sm">
                <span className="font-medium text-zinc-200">
                  Structured learning, now for playlists.
                </span>{" "}
                DevGuide turns scattered developer videos into a clear learning
                path.
              </p>

              <span className="text-emerald-400">•</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mr-10 hidden shrink-0 items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/4 px-4 py-2 text-xs font-semibold text-emerald-400 transition-all duration-300 group-hover:border-emerald-400/70 group-hover:bg-emerald-500/8 group-hover:text-emerald-300 sm:flex">
          Explore
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* CLOSE BUTTON */}
      <button
        type="button"
        aria-label="Close DevGuide announcement"
        onClick={handleClose}
        className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md text-zinc-500 transition-all duration-200 hover:bg-zinc-800/70 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
