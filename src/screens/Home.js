import React from "react";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import {
  hero,
  navlinks,
  memory,
  placesAPI,
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
    </>
  );
}
