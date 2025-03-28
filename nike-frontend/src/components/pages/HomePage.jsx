import React from "react";
import VideoBanner from "../videoBanner/VideoBanner";
import ProductGrid from "../productGrid/ProductGrid";
import ShoeCarousel from "../swiper/ShoeCarousel";


const HomePage = () => {
  return (
    <div className="lg:mt-[100px] flex flex-col items-center justify-center text-center">
      {/* Video Banner */}
      <VideoBanner />

      {/* Content Section */}
      <div className="mt-16 max-w-3xl">
        <p className="text-lg text-gray-700 font-medium">Paige Bueckers</p>

        <h1 className="text-[80px] md:text-[90px] font-bold text-black leading-[1.05] tracking-wide mt-2 font-anton uppercase">
          CATCH HER <br /> IF YOU CAN
        </h1>

        <p className="text-lg text-black mt-4 max-w-3xl mx-auto font-light">
          Catch Paige Bueckers on the red carpet or the runway, but you’ll never
        </p>
        <p className="text-lg text-black mt-4 max-w-3xl mx-auto font-light">
          catch her when she’s dropping that pull-up jumper in your face.
        </p>
        {/* Buton */}
        <a
          href="/shop"
          className="mt-6 inline-block px-10 py-4 bg-black text-white text-xl font-semibold rounded-full hover:bg-gray-800 transition"
        >
          Shop
        </a>
      </div>

      <ProductGrid />

      {/* Content Section */}
      <div className="mt-16 max-w-3xl">
        <p className="text-lg sm:text-base text-gray-700 font-medium font-[Oswald]">Just In</p>

        <h1 className="text-[50px] md:text-[90px] font-bold text-black leading-[1.05] tracking-wide mt-2 font-anton uppercase">
          INTRODUCING <br /> NIKE LEOTARDS
        </h1>

        <p className="text-lg text-black mt-4 max-w-2xl mx-auto font-light">
          The new gold standard from Nike Gymnastics.
        </p>
        <p className="text-lg text-black mt-4 max-w-2xl mx-auto font-light">
           Made to move, on and off the mat.
        </p>
        {/* Button */}
        <a
          href="/shop"
          className="mt-6 inline-block px-10 py-4 bg-black text-white text-xl font-semibold rounded-full hover:bg-gray-800 transition"
        >
          Shop
        </a>
      </div>

      <div className="w-full mt-10 relative">
        <img 
          src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_2058,c_limit/9b37c3ba-5230-4a52-a6b0-fc52ce7c5354/nike-just-do-it.jpg" 
          alt="Nike Athlete"
          className="w-full h-auto max-h-[800px] object-cover"
        />
      </div>

      <div className="w-full relative">
        <ShoeCarousel />
      </div>

    </div>
  );
};

export default HomePage;
