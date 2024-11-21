"use client";

import React from "react";
import TextTransition, { presets } from "react-text-transition";

export default function TextCycler({
  texts = [],
  speed = 3000,
  className = "",
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), speed);

    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className="inline">
      <TextTransition
        springConfig={presets.wobbly}
        delay={speed}
        className={className}
      >
        {texts[index % texts.length]}
      </TextTransition>
    </h1>
  );
}
