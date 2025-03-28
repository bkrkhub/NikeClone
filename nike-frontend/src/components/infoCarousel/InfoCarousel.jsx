import React from 'react'
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux';
import { nextMessage, prevMessage } from '../../slices/infoCarouselSlice';

const messages = [
    'Get a Nike Gift Card',
    'Members: Free Shipping on Orders $50+',
    'Look for Store Pickup at Checkout',
];

const InfoCarousel = () => {
    const dispatch = useDispatch();
    const currentIndex = useSelector((state) => state.InfoCarousel.currentIndex);

    // Automatic switching
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(nextMessage());
        }, 4000); // Transition every 4 seconds

        // clear when component unmount
        return () => clearInterval(interval)
    }, [dispatch]);

    return (
    <div className='w-full bg-gray-100 py-6 px-4 flex items-center justify-evenly text-sm font-medium text-gray-800 relative'>
        {/* left arrow */}
        <button onClick={() => dispatch(prevMessage())} className='hover:text-black transition z-10'>
            <ChevronLeftIcon className='w-5 h-5' />
        </button>

        {/* message in the middle */}
        <div className='text-center hover:underline cursor-pointer'>
            <p className='transition-opacity duration-500 ease-in-out'>{messages[currentIndex]}</p>
        </div>

        {/* right arrow */}
        <button onClick={() => dispatch(nextMessage())} className='hover:text-black transition z-10'>
            <ChevronRightIcon className='w-5 h-5' />
        </button>

    </div>
  );
};

export default InfoCarousel;