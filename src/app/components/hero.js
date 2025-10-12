import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Image from "next/image";
import Projects from "@/app/components/projects";
import Experience from "./experience";
import kg from "../../../public/kg.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

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
          className="shadow-2xl shadow-gray-400/20 md:hidden xs:block rounded-full w-64 h-64 my-auto md:m-auto mt-16 md:mr-10"
        />
        <div className="md:pt-24 pt-12 max-w-6xl sm:w-full md:w-1/2">
          <div className="text-7xl font-bold flex">karthik gurram</div>

          <p className="text-xl pt-8">
            software engineer based in Toronto keen on fullstack development,
            ML, and building creative projects that matter
          </p>
          <div className="flex pt-8 w-fit hover:scale-105 duration-200 ease-out">
            <a
              href="/resume.pdf"
              target="_blank"
              className="text-lg decoration-3 underline underline-offset-8 decoration-teal-400 pr-2"
            >
              paper thing for recruiters
            </a>

            <motion.div
              className="w-fit my-auto"
              initial={{ scale: 0 }}
              animate={{
                scale: [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                  1.5, 1.5, 1,
                ],
              }}
              transition={{ duration: 0.5 }}
            >
              <FaArrowRight className="my-auto text-teal-400" />
            </motion.div>
          </div>
          <div className="relative flex pt-4 w-fit hover:scale-105 duration-200 ease-out">
            <a
              href="#projects"
              className="flex text-lg decoration-3 underline underline-offset-8 decoration-teal-400 pr-2"
            >
              projects
            </a>

            <motion.div
              className="w-fit my-auto"
              initial={{ scale: 0 }}
              animate={{
                scale: [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                  1.5, 1.5, 1,
                ],
              }}
              transition={{ duration: 0.5 }}
            >
              <FaArrowDown className="my-auto text-teal-400" />
            </motion.div>
          </div>
        </div>
        <Image
          src="/kg.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
          priority={true}
          className="shadow-[0px_0px_80px_5px_rgba(50,_50,_50,_0.5)] hidden md:block rounded-full md:w-64 md:h-64 lg:w-80 lg:h-80 m-auto mt-24"
        />
      </div>

      <div>
        <Experience></Experience>
      </div>
      <div className="" id="projects">
        <Projects></Projects>
      </div>

      {/* </motion.div> */}
    </div>
  );
};
// comment
export default Hero;
