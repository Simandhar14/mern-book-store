import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Books
            <span className="text-blue-700"> for the Best Prices</span>
          </h2>
          <p className="md:w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
            neque dignissim, euismod est ut, finibus purus. Integer malesuada
            diam risus, id commodo elit tempor quis. Ut auctor eros lectus, nec
            ullamcorper quam convallis pretium. Curabitur eu aliquam tortor, eu.
          </p>
        </div>
      </div>
      <div>
        <BannerCard />
      </div>
    </div>
  );
};

export default Banner;
