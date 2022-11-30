import React from "react";
import { useState } from "react";

const Card = ({ projName, projLang, projDesc, projLink, projImg }) => {
  const name = useState(projName);
  const lang = useState(projLang);
  const desc = useState(projDesc);
  const link = useState(projLink);
  // const imgURL = useState(projImg);

  return (
    <div className="card 2xl:flex 2xl:flex-wrap xl:h-full h-fit xl:w-full rounded-2xl  bg-gradient-to-r from-neutral-800 to-neutral-900 backdrop-blur-xl">
      <div className="xl:px-4 2xl:px-8 h-full w-full bg-transparent py-12 px-8 relative duration-200 ease-out hover:scale-105">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="xl:space-y-12 lg:space-y-12 space-y-8"
        >
          {/* <img src={require(imgURL).default} alt={`bruh`} /> */}
          <p className=" text-neutral-500 w-fit bg-transparent px-6">{lang}</p>
          <h1 className="2xl:text-5xl lg:text-5xl xl:text-4xl text-4xl font-bold w-fit bg-transparent px-6">
            {name}
          </h1>
          <p className="text-neutral-500 text-xl w-fit bg-transparent px-6">
            {desc}
          </p>
        </a>
      </div>
    </div>
  );
};

export default Card;
