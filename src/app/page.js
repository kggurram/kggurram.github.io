"use client";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-950 text-white tracking-widest scroll-smooth">
        <div className="w-4/5 sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-4/5 2xl:w-3/5 h-full m-auto flex flex-wrap ">
          {/* <Nav></Nav> */}
          <Hero></Hero>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
