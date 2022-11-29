import React from "react";
import { useState } from "react";
import gradient from "../assets/gradient.jpg";

const Card = ({ projName, projLang, projDesc, projLink }) => {
  const [name, setName] = useState(projName);
  const [lang, setLang] = useState(projLang);
  const [desc, setDesc] = useState(projDesc);
  const [link, setLink] = useState(projLink);

  return (
    <div className="card h-fit rounded-2xl  bg-gradient-to-r from-neutral-800 to-neutral-900 backdrop-blur-xl">
      <div className="h-full w-fit bg-transparent py-12 px-8 relative duration-200 ease-out hover:scale-105">
        <a
          href={link}
          target="_blank"
          noref="noopener noreferrer"
          className="space-y-3"
        >
          <p className=" text-neutral-500 w-fit bg-transparent px-6">{lang}</p>
          <h1 className="text-3xl font-bold w-fit bg-transparent px-6">
            {name}
          </h1>
          <p className="text-neutral-500 w-fit bg-transparent px-6">{desc}</p>
        </a>
      </div>
    </div>
  );
};

export default Card;
