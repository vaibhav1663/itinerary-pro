import React from "react";
import { useEffect, useState } from "react";
import Explore from "../components/Explore";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import {
  hero,
  navlinks,
  memory,
  brands,
  pricingapi,
  bannerAPI,
  footerAPI,
} from "../data/staticdata.js";
export default function Home() {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Explore title="Explore The Beauty of World" />
    </>
  );
}
