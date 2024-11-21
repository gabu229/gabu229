"use client";

import React, { useEffect, useState } from "react";
import "./circular-text.css";
import { MdArrowOutward } from "react-icons/md";

const CircularText = ({ text, radius }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(text.split(""));
  }, [text]);

  return (
    <div className="w-full m-2 grid place-items-center max-w-[120px] aspect-square rounded-full">
      <div className="textContainer" aria-hidden="true">
        {characters.map((c, i) => (
          <span style={{ "--i": i }} key={i} className="font-semibold">
            {text}
          </span>
        ))}
      </div>

      <div className="absolute p-7 rounded-full">
        <MdArrowOutward size={50} />
      </div>
    </div>
  );
};

export default CircularText;
