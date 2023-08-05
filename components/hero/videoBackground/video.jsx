import React from "react";

export default function VideoBackground({videoSrc}) {
  return (
    <video className="absolute top-0 -z-10 w-full bg-slate-400 md:h-[600px] h-[450px] object-cover" autoPlay muted >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
