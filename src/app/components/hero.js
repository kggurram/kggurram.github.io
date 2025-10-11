import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Image from "next/image";
import Projects from "@/app/components/projects";
import Experience from "./experience";
import kg from "../../../public/kg.jpg";

const Hero = () => {
  return (
    <div className="w-full">
      {/* <motion.div
        className="flex"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.4 }}
      > */}
      <div className="md:flex pb-24 max-w-6xl mx-auto">
        <Image
          src="/kg.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
          priority={true}
          className="md:hidden xs:block rounded-full w-64 h-64 my-auto md:m-auto mt-24 md:mr-10"
        />
        <div className="md:pt-24 pt-12 max-w-6xl sm:w-full md:w-1/2">
          <div className="text-5xl font-bold tracking-widest flex">
            karthik gurram.
          </div>

          <p className="text-xl pt-8">
            software engineer based in Toronto keen on fullstack development,
            ML, and building creative projects that matter
          </p>
          <div className="pt-8 w-fit hover:scale-105 duration-200 ease-out">
            <a
              href="/resume.pdf"
              target="_blank"
              className="text-lg decoration-3 underline underline-offset-8 decoration-teal-400"
            >
              paper thing for recruiters
            </a>
          </div>
        </div>
        <Image
          src="/kg.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
          priority={true}
          className="hidden md:block rounded-full md:w-64 md:h-64 lg:w-80 lg:h-80 m-auto mt-24"
        />
      </div>

      <div>
        <Experience></Experience>
      </div>
      <div className="">
        <Projects></Projects>
      </div>

      {/* </motion.div> */}
    </div>
  );
};
// comment
export default Hero;
