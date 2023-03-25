import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../images/menu.svg";
import PopupMenu from "./PopupMenu";
import iti from "../images/itinerary_pro.png"

const Navbar = ({ navlinks, ctaVisible = true }) => {
  const [popupState, setPopupState] = useState(false);
  const [navState, setNavState] = useState(false);
  const onTriggerPopup = () => setPopupState(!popupState);

  const onNavScroll = () => {
    if (window.scrollY > 80) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`
        z-50 nav-default ${navState && "nav-sticky"}
      `}
      >
        <nav className="flex items-center justify-between travigo-container">
          <NavLink to={`/`} className="flex items-center">
            <img src={iti} alt="Title image" className="w-24 object-fill" />
            
          </NavLink>
          <ul className="flex items-center lg:hidden gap-7">
            {navlinks?.map((val, i) => (
              <li key={i}>
                <NavLink to={val.path} className="text-lg text-slate-900">
                  {val.link}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="flex items-center lg:hidden">
            <li>
              <button
                type="button"
                className={`button-emrald px-7 text-base ${
                  !ctaVisible && "opacity-0 pointer-events-none"
                }`}
              >
                <NavLink to={`/ChooseAI`}>AI Itinerary</NavLink>
              </button>
            </li>
          </ul>
          <ul className="hidden lg:flex items-center">
            <li>
              <button
                type="button"
                className="flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
                onClick={onTriggerPopup}
              >
                <img
                  src={menu}
                  alt="menu/svg"
                  className="object-cover shadow-sm filter"
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <PopupMenu navlinks={navlinks} popupState={popupState} />
    </>
  );
};

export default Navbar;
