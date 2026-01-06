import { useEffect, useState, useRef } from "react";

export default function Typewriter({ text }) {
  const [displayed, setDisplayed] = useState("");
  const audioRef = useRef(null);

  useEffect(() => {
    // create audio only once
    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/typing.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }

    let index = 0;

    // try playing AFTER interaction
    audioRef.current.play().catch(() => {});

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }, 45);

    return () => {
      clearInterval(interval);
      audioRef.current.pause();
    };
  }, [text]);

  return (
    <p className="text-xl md:text-2xl leading-relaxed whitespace-pre-line text-white">
      {displayed}
    </p>
  );
}
