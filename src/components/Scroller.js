import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import projects from "../assets/projects.json";

const Scroller = () => {
  useEffect(() => {}, []);

  return (
    <div className="w-full wrapper 2xl:px-0 2xl:ml-16 lg:overflow-y-scroll lg:pt-12 lg:px-0 lg:my-0 md:px-20 sm:px-12 mb-12 pt-12 px-8 space-y-16">
      {projects.map((project, idx) => {
        console.log(project.name);
        return (
          <Card
            key={idx}
            projName={project.name}
            projLang={project.lang}
            projDesc={project.desc}
            projLink={project.link}
          />
        );
      })}

      {/* <p className="scroller">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        tristique augue vel ex feugiat, a placerat nunc efficitur. Morbi
        hendrerit nec velit ac ultrices. Donec at dapibus elit, at mattis felis.
        Morbi eu imperdiet elit. Nulla volutpat neque ac arcu venenatis, a
        ornare nisl tempor. Pellentesque ultricies eu orci laoreet feugiat.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique
        augue vel ex feugiat, a placerat nunc efficitur. Morbi hendrerit nec
        velit ac ultrices. Donec at dapibus elit, at mattis felis. Morbi eu
        imperdiet elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl
        tempor. Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque tristique augue vel ex
        feugiat, a placerat nunc efficitur. Morbi hendrerit nec velit ac
        ultrices. Donec at dapibus elit, at mattis felis. Morbi eu imperdiet
        elit. Nulla volutpat neque ac arcu venenatis, a ornare nisl tempor.
        Pellentesque ultricies eu orci laoreet feugiat.
      </p> */}
    </div>
  );
};

export default Scroller;
