import React from "react";
import { Nav, Navbar, Sidemenu, Bottommenu, Tech } from "../components";
import { motion } from "framer-motion";
import { healthPackages } from "../constants";
import { Card, Typography } from "@material-tailwind/react";

const calculateTotalCost = (tests) =>
  tests.reduce((acc, test) => acc + test.testPrice, 0);

const calculateSavings = (totalCost, discountedPrice) =>
  totalCost - discountedPrice;

const PackageCard = ({ packageData }) => {
  const totalCost = calculateTotalCost(packageData.packageIncludes);
  const savings = calculateSavings(totalCost, packageData.discountedPrice);
  return (
    <div className="relative bg-[rgb(240,255,240)] max-w-7xl rounded-2xl overflow-hidden shadow-2xl p-4 m-4">
      <div className="absolute top-4 left-14 transform -rotate-45 -translate-x-1/2 translate-y-1/2 bg-[#1b7ced] px-12 py-2">
        <p className="text-[#ffffff] text-xl font-bold whitespace-nowrap">
          Save: ${savings}
        </p>
      </div>
      <div className="py-5 pt-10 font-bold text-[#36454F] text-2xl text-center mb-2">
        {packageData.packageName}
      </div>
      <div className="divide-y divide-gray-200">
        {packageData.packageIncludes.map((test, index) => (
          <div key={index} className="flex justify-between gap-2 py-1 px-3">
            <span className="text-[#36454F]">{test.testName}</span>
            <span className="text-gray-700">${test.testPrice}</span>
          </div>
        ))}
      </div>
      <div className="font-bold border-t-2 border-gray-400 my-3"></div>
      <div className="divide-y divide-gray-200">
        <div className=" flex justify-between gap-2 divide-y divide-gray-200">
          <p className="text-gray-700">Total Cost:</p>
          <p className="text-gray-700">${totalCost}</p>
        </div>
        <div className=" flex justify-between gap-2">
          <p className="text-gray-700">Discounted Price:</p>
          <p className="text-gray-700 text-[20px] font-bold "> ${packageData.discountedPrice}</p>
        </div>
      </div>
      <div className="-rotate-45">
      </div>
    </div>
  );
};

const Health = () => {
  return (
    <div className="bg-[#F5FFFA]">
      <Nav />
      <Navbar />
      <Sidemenu />
      <Bottommenu />
      <div className="flex mx-auto pb-10 pt-[150px] max-w-7xl justify-center flex-wrap gap-7">
        {healthPackages.map((packageData) => (
          <PackageCard key={packageData.packageID} packageData={packageData} />
        ))}
      </div>
    </div>
  );
};

export default Health;
