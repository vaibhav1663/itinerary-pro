import React from "react";
import { useEffect, useState } from "react";
import Explore from "../components/Explore";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Memory from "../components/Memory";
import { hero, navlinks, memory } from "../data/staticdata.js";
import PopularPlaces from "./PopularPlaces";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <PopularPlaces />
      <Explore title="Explore The Beauty of World" />
      <Memory memory={memory} />
      <Footer />
    </>
  );
}
