import React from "react";

function Heading({ heading }) {
  return (
    <div className="flex mt-10 items-center justify-center text-center mb-11 md:mb-7">
      <h1 className="text-5xl mt-10 lg:text-4xl md:text-3xl sm:text-2xl xsm:text-2xl font-bold filter drop-shadow-lg text-slate-900">
        {heading}
      </h1>
    </div>
  );
}

export default Heading;
