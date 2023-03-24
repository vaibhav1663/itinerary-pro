import dashboard from "../images/dashboard.jpg";
import memoryimg from "../images/memory.png";

export const navlinks = [
  { link: "Home", id: "home" },
  { link: "About", id: "about" },
  { link: "Explore", id: "explore" },
  { link: "Pricing", id: "pricing" },
  { link: "Contact", id: "contact" },
];

export const hero = {
  title: "Its a Big World Out",
  subtitle: "Then, Go Explore",
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
    { number: "10", title: "Year Experience" },
    { number: "400", title: "Year Collaboration" },
    { number: "30k+", title: "Happy Customer" },
  ],
};
