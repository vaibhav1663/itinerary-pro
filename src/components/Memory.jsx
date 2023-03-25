import React from "react";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TranslateIcon from '@mui/icons-material/Translate';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
const Memory = ({ memory: { title, text, subtitle, img, experience } }) => {
  return (
    <>
      <div className="relative my-16 md:mb-7">
        <div className="travigo-container flex items-center justify-between gap-16 xl:gap-9 lg:flex-col-reverse">
          <div className="flex items-center justify-start lg:justify-center w-full max-w-md">
            <img
              src={img}
              style={{ objectFit: "cover", borderRadius: 100 }}
              alt="memory/img"
              className="w-auto h-[55vh] object-fill"
            />
          </div>
          <div className="grid items-center w-full max-w-2xl lg:text-center">
            <h1 className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg">
              {title}
            </h1>
            <h1 className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg">
              {subtitle}
            </h1>
            <p className="text-base my-5 sm:text-sm">{text}</p>
            <div className="grid items-center grid-cols-3 gap-7 xl:gap-3">

                <div
                  key="1"
                  className="bg-gradient-to-b from-blue-300 to-green-300 shadow-lg shadow-emerald-200 flex items-center justify-center flex-col py-7 px-5 xl:p-5 rounded-lg text-slate-900 filter cursor-pointer hover:scale-105 transition-all duration-400"
                >
                  <PrecisionManufacturingIcon fontSize="large"/>
                  <p className="text-lg xl:text-base sm:text-sm xsm:text-xs font-medium">
                    AI-generated Itinerary
                  </p>
                </div>

                <div
                  key="2"
                  className="bg-gradient-to-b from-blue-300 to-green-300 shadow-lg shadow-emerald-200 flex items-center justify-center flex-col py-7 px-5 xl:p-5 rounded-lg text-slate-900 filter cursor-pointer hover:scale-105 transition-all duration-400"
                >
                  <PictureAsPdfIcon fontSize="large"/>
                  <p className="text-lg xl:text-base sm:text-sm xsm:text-xs font-medium">
                    Detailed PDFs
                  </p>
                </div>

                <div
                  key="3"
                  className="bg-gradient-to-b from-blue-300 to-green-300 shadow-lg shadow-emerald-200 flex items-center justify-center flex-col py-7 px-5 xl:p-5 rounded-lg text-slate-900 filter cursor-pointer hover:scale-105 transition-all duration-400"
                >
                  <TranslateIcon fontSize="large"/>
                  <p className="text-lg xl:text-base sm:text-sm xsm:text-xs font-medium">
                    Multilinugal Itinerary
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Memory;
