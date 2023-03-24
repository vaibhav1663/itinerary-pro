import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AIItinerary from './Itinerary';
import ThirdItinerary from './ThirdItinerary';
import ItineraryDetails from './ItineraryDetails';
import Profile from './Profile';
import NoPage from './NoPage';
import About from './About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> }/>
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
