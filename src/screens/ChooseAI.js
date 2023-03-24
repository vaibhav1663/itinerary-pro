import { Link } from "react-router-dom";

const ChooseAI = () => {
  return (
    <div className="bg bg-gradient-to-b from-teal-200 to-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Choose Type of Itinerary</h1>
      <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl">
        {/* Option A */}
        <Link
          to="/ChooseAI/ConciseTrip"
          className="bg-white rounded-xl shadow-lg p-6 m-4 md:m-0 md:w-5/12 transform transition hover:scale-105"
        >
          <h2 className="text-2xl font-bold mb-2">Concise Itinerary</h2>
          <p className="text-gray-600">
            Enter only 3 details Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor eveniet quia iusto voluptas, ipsa, eum illum
            ratione! Sapiente, exercitationem modi pariatur architecto
          </p>
        </Link>

        {/* Option B */}
        <Link
          to="/ChooseAI/DetailedTrip"
          className="bg-white rounded-xl shadow-lg p-6 m-4 md:m-0 md:w-5/12 transform transition hover:scale-105"
        >
          <h2 className="text-2xl font-bold mb-2">Detailed Itinerary</h2>
          <p className="text-gray-600">
            Enter Large amount of Details Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor eveniet quia iusto voluptas, ipsa,
            aspernatur quisquam optio, suscipit ex quasi minus deleniti illo!
            Tempora quia tenetur corrupti, quas temporibus placeat? Accusantium
            dolores t
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ChooseAI;
