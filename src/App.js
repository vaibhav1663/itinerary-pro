import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import AITravelPlannerDetailed from "./screens/AITravelPlanner";
import ThirdItinerary from "./screens/ThirdItinerary";
import ItineraryDetails from "./screens/ItineraryDetails";
import Profile from "./screens/Profile";
import NoPage from "./screens/NoPage";
import About from "./screens/About";
import AIConciseTrip from "./screens/AIConciseTrip";
import Login from "./screens/Login";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./screens/ProtectedRoute";
import ExistingItinerary from "./screens/ExistingItinerary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/DetailedTrip" element={<ProtectedRoute><AITravelPlannerDetailed /></ProtectedRoute>} />
            <Route path="/ConciseTrip" element={<ProtectedRoute><AIConciseTrip /></ProtectedRoute>} />
            <Route path="/third_itinerary" element={<ProtectedRoute><ThirdItinerary /></ProtectedRoute>} />
            <Route path="/itinerary_details" element={<ProtectedRoute><ItineraryDetails /></ProtectedRoute>} />
            <Route path="/existing_itinerary" element={<ProtectedRoute><ExistingItinerary /></ProtectedRoute>} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
