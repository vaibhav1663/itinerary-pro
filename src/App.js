import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import AIItinerary from "./screens/Itinerary";
import ThirdItinerary from "./screens/ThirdItinerary";
import ItineraryDetails from "./screens/ItineraryDetails";
import Profile from "./screens/Profile";
import NoPage from "./screens/NoPage";
import About from "./screens/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ai_itinerary" element={<AIItinerary />} />
          <Route path="/third_itinerary" element={<ThirdItinerary />} />
          <Route path="/itinerary_details" element={<ItineraryDetails />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
