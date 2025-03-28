import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setVideoPlaying } from '../../slices/videoSlice';
import thumbnail from "../../assets/homePage/women.jpg";

const VideoBanner = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.video.isVideoPlaying);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {!isPlaying ? (
        <div className="relative w-full h-full">
          <img 
            src={thumbnail} 
            alt="Nike Video" 
            className="absolute md:top-24 lg:top-0 left-0 w-full h-full object-cover object-top object-center-20"
          />
          <button
            onClick={() => dispatch(setVideoPlaying(true))}
            className="absolute bottom-6 left-6 bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700 transition z-10"
          >
            Watch
          </button>
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/b0Ezn5pZE7o?autoplay=1&loop=1&playlist=b0Ezn5pZE7o"
            title="Nike Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            onEnded={() => dispatch(setVideoPlaying(false))}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoBanner;
