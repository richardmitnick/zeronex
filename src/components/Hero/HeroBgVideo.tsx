import React from "react";

interface HeroBgVideoProps {
  customVideoUrl: string;
}

const HeroBgVideo = React.memo(({ customVideoUrl }: HeroBgVideoProps) => {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source src={customVideoUrl} type="video/mp4" />
    </video>
  );
});

HeroBgVideo.displayName = "HeroBgVideo";

export default HeroBgVideo;
