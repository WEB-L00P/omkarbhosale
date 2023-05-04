import React from "react";

const Spotify = () => {
  return (
    <div className="my-5">
      <iframe
        className="sm:w-96 px-10 lg:px-0 h-20 mx-auto rounded-[12px]"
        src="https://open.spotify.com/embed/track/2K87XMYnUMqLcX3zvtAF4G?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Spotify;
