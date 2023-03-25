import dashboard from "../images/dashboard.jpg";
import memoryimg from "../images/memory.png";

export const navlinks = [
  { link: "Home", id: "home", path: "/" },
  { link: "About", id: "about", path: "/AboutUs" },
  { link: "Explore", id: "explore", path: "/explore" },
  {
    link: "Existing Itineraries",
    id: "existing_itineraries",
    path: "/existing_itinerary",
  },
  { link: "Contact", id: "contact", path: "/contact" },
  { link: "Profile", id: "profile", path: "/profile" },
];

export const hero = {
  title: "Tailored itineraries ",
  subtitle: "for your dream trip",
  text: "We provide you always your dream places. We always make our customer happy by proving many choices.",
  btn1: "Get Started",
  btn2: "Get Demo",
  img: dashboard,
};

export const memory = {
  title: "Sweet Memories",
  subtitle: "Come To Life Again",
  text: "What we have always taken care for 10 years is always prioritizing the comfort of our users. So, do not our quality.",
  img: memoryimg,
  experience: [
    { number: "10", title: "Ai-generated Itinerary" },
    { number: "400", title: "Detailed PDFs" },
    { number: "30k+", title: "Multilinugal Itinerary" },
  ],
};
