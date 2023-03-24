import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navlinks } from "../data/staticdata.js";

const ChooseAI = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <div className="bg px-5 bg-gradient-to-b from-teal-200 to-white h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8">Choose Type of Itinerary</h1>
        <div className="flex md:flex-col flex-row justify-between w-full max-w-4xl">
          {/* Option A */}
          <Link
            to="/ChooseAI/ConciseTrip"
            className="bg-white rounded-xl shadow-lg p-6 m-4  w-1/2 sm:w-full transform transition hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-2">Concise Itinerary</h2>
            <p className="text-gray-600">
              Provides a succinct travel plan by taking into account the
              traveler's specified destination, budget, and duration of the
              trip.
            </p>
          </Link>

          {/* Option B */}
          <Link
            to="/ChooseAI/DetailedTrip"
            className="bg-white rounded-xl shadow-lg p-6 m-4  w-1/2 sm:w-full transform transition hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-2">Detailed Itinerary</h2>
            <p className="text-gray-600">
              The AI generates a tailor-made itinerary on the traveler's chosen
              destination, budget, and duration of stay, all in the language of
              their choice. It considers the traveler's interests, activites and
              cuisine preferences while suggesting suitable accommodations to
              enhance the overall travel experience.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChooseAI;
