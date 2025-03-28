import React from "react"
import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-cards"

import { useDispatch, useSelector } from "react-redux"
import { setActiveShoeIndex, resetSwiperKey } from "../../slices/shoeCarouselSlice"

const shoes = [
    {
        name: "Dunk",
        link: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1807,c_limit/d349028a-633e-4d26-bedc-1d20062edb82/nike-just-do-it.jpg",
        description: "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors.",
        color: "White/Black",
        style: "DD1391-100"
    },
    {
        name: "Air Force 1",
        link: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1807,c_limit/be5fa28d-45c2-45b5-a60f-c698163aee18/nike-just-do-it.jpg",
        description: "The classic Air Force 1 with legendary comfort and timeless style. A must-have sneaker for every collection.",
        color: "White/White",
        style: "CW2288-111"
    },
    {
        name: "Blazer",
        link: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1807,c_limit/bce4329e-4d2d-4558-8276-655299b5eb42/nike-just-do-it.jpg",
        description: "A throwback to the '70s, the Nike Blazer Mid has a retro design that never goes out of style.",
        color: "Black/White",
        style: "CZ1055-002"
    },
    {
        name: "Cortez",
        link: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1807,c_limit/a75d42ee-6142-4024-98ef-b6ed4c90909a/nike-just-do-it.jpg",
        description: "The Nike Cortez is a classic silhouette with a rich history in running culture and street style.",
        color: "White/Red/Blue",
        style: "819719-103"
    },
    {
        name: "Air Max",
        link: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1807,c_limit/68f314a7-ad74-477e-840b-c0a1ef00a49b/nike-just-do-it.jpg",
        description: "Featuring visible Air cushioning, the Air Max delivers all-day comfort with a bold design.",
        color: "White/Grey",
        style: "CZ7996-100"
    },
    {
        name: "Air Jordan",
        link: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1807,c_limit/52cc5902-5fed-4320-8776-0c1161c978c9/nike-just-do-it.jpg",
        description: "Inspired by MJ’s legacy, the Air Jordan series brings performance and style to the next level.",
        color: "Red/Black/White",
        style: "CZ6249-600"
    },
    {
        name: "Vomero",
        link: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1807,c_limit/5f3cbf3a-61d7-4a71-a9cf-2f7679eefae1/nike-just-do-it.jpg",
        description: "The Nike Vomero offers plush cushioning for smooth rides and enhanced performance.",
        color: "White/Black/Silver",
        style: "DA7245-001"
    }
];

const ShoeCarousel = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const activeShoeIndex = useSelector((state) => state.shoeCarousel.activeShoeIndex)
    const swiperKey = useSelector((state) => state.shoeCarousel.swiperKey)

    const activeShoe = shoes[activeShoeIndex]

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center min-h-[70vh] bg-black text-white px-4 md:px-10 gap-8">
            {/* Left Column */}
            <div className="w-full lg:w-1/4 p-5 text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-wider font-bold mb-2 font-stencil uppercase">Shop The Classics</h2>
                <p className="text-gray-400 text-3xl font-teko ">
                    Discover the most iconic Nike sneakers of all time. From Air Jordan to Air Max.
                </p>
            </div>

            {/* Middle Column (Swiper) */}
            <div className="w-full md:w-1/2 flex justify-center my-5 md:my-0">
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="w-[90%] max-w-[320px] h-[400px] md:w-[350px] md:h-[500px]"
                    loop={true}
                    onSlideChange={(swiper) => {
                        dispatch(setActiveShoeIndex(swiper.realIndex))
                        if (swiper.isEnd) {
                          setTimeout(() => {
                            dispatch(resetSwiperKey())
                          }, 300)
                        }
                    }}
                >
                    {shoes.map((shoe, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex flex-col justify-center items-center bg-black rounded-xl shadow-xl shadow-gray-500"
                        >
                            <img
                                src={shoe.link}
                                alt={shoe.name}
                                className="w-full h-full object-contain p-5"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/4 p-5 text-center lg:text-left">
                <h2 className="text-7xl font-bold font-stencil te">{activeShoe.name}</h2>
                <p className="text-gray-400 mt-2 font-teko text-3xl">{activeShoe.description}</p>
                <ul className="mt-3 text-gray-300 text-sm">
                    <li><span className="font-bold font-">Shown:</span> {activeShoe.color}</li>
                    <li><span className="font-bold">Style:</span> {activeShoe.style}</li>
                </ul>
                <button className="mt-4 px-6 py-2 bg-white text-red-600 rounded-lg hover:bg-gray-300 transition font-anton" onClick={() => navigate("/shop")}>
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default ShoeCarousel;
