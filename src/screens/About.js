import React from "react";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import { navlinks } from "../data/staticdata.js";
const About = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />

      <div className="bg-gradient-to-b from-emerald-50 to-green-100 min-h-screen">
        <div className="container mx-auto py-16 px-4">
          <Heading heading="About Us" />

          <div className="flex flex-row md:flex-col">
            <div className="mx-5 text-center rounded-xl shadow-lg w-1/2 md:w-full mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4 p-5">Who We Are</h2>
              <p className="text-gray-700 leading-loose p-5">
                ItineraryPro is a travel itinerary recommendation website that
                helps travelers plan their trips with ease. Our website offers
                itinerary suggestions from popular travel websites like
                MakeMyTrip, and we use AI-powered APIs to generate a beautiful
                and personalized trip itinerary that meets your preferences and
                budget. We also generate PDF reports of your itinerary, so you
                can easily access your trip details on the go.
              </p>
            </div>
            <div className="mx-5 text-center rounded-xl shadow-lg w-1/2 md:w-full mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4 p-5">What We Do</h2>
              <p className="text-gray-700 leading-loose p-5">
                At ItineraryPro, we believe that planning a trip should be as
                enjoyable as the trip itself. We use advanced algorithms and
                machine learning techniques to generate itinerary
                recommendations that are tailored to your interests, time
                constraints, and budget. Our AI-powered platform ensures that
                you get the best travel recommendations based on your
                preferences, so you can make the most of your trip. We also work
                hard to make your itinerary look beautiful and professional, so
                you can share it with friends and family or use it as a
                reference during your trip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
