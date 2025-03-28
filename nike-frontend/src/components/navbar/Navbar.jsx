import React from "react";
import { FaSearch, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import NikeLogo from "../../assets/navbar/nike.png";
import Jordan from "../../assets/navbar/jordan.png";
import Converse from "../../assets/navbar/converse.png";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack, IoMdHelp, IoIosCloseCircle  } from "react-icons/io";
import { TbShoppingBag } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa6";
import { BiStore } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveMenu,
  setIsSearchOpen,
  setIsHelpOpen,
  setIsMobileMenuOpen,
  setMobileActiveMenu,
  setMobileSubMenuTitle,
  resetMobileMenu
} from "../../slices/navbarSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const {
    activeMenu,
    isSearchOpen,
    isHelpOpen,
    isMobileMenuOpen,
    mobileActiveMenu,
    mobileSubMenuTitle
  } = useSelector((state) => state.navbar);

  const menuItems = [
    {
      name: "New",
      subMenu: [
        { title: "Featured", items: ["New Arrivals", "Best Sellers", "Latest Drops", "New in Air Max: Dn8", "Vomero 18", "SNKRS Launch Calendar"] },
        { title: "Shop New", items: ["Men", "Women", "Kids", "Shop All"] },
        { title: "Trending", items: ["24/7 Collection", "Nike Style By", "So Win Collection", "ACG Essentials", "Running Shoe Finder"] },
        { title: "Shoes", items: ["All Shoes", "Basketball", "Lifestyle", "Jordan", "Retro Running", "Running"] },
        { title: "Clothing", items: ["All Clothing", "Hoodies & Sweatshirts", "Tracksuits", "Jackets & Vests", "Shorts"] },
        { title: "Accessories", items: ["Bags & Backpacks", "Hats & Headwear", "Socks", "Sunglasses", "Belts"] }

      ]
    },
    {
      name: "Men",
      subMenu: [
        { title: "Shoes", items: ["All Shoes", "Basketball", "Lifestyle", "Jordan", "Retro Running", "Running"] },
        { title: "Clothing", items: ["All Clothing", "Hoodies & Sweatshirts", "Tracksuits", "Jackets & Vests", "Shorts"] },
        { title: "Accessories", items: ["Bags & Backpacks", "Hats & Headwear", "Socks", "Sunglasses", "Belts"] },
        { title: "Featured", items: ["New Arrivals", "Best Sellers", "Latest Drops", "New in Air Max: Dn8", "Vomero 18", "SNKRS Launch Calendar"] },
        { title: "Shop New", items: ["Men", "Women", "Kids", "Shop All"] },
        { title: "Trending", items: ["24/7 Collection", "Nike Style By", "So Win Collection", "ACG Essentials", "Running Shoe Finder"] },
        { title: "Shoes", items: ["All Shoes", "Basketball", "Lifestyle", "Jordan", "Retro Running", "Running"] },
      ]
    },
    {
      name: "Women",
      subMenu: [
        { title: "Featured", items: ["New Arrivals", "Best Sellers", "Latest Drops", "New in Air Max: Dn8", "Vomero 18", "SNKRS Launch Calendar"] },
        { title: "Shop New", items: ["Men", "Women", "Kids", "Shop All"] },
        { title: "Trending", items: ["24/7 Collection", "Nike Style By", "So Win Collection", "ACG Essentials", "Running Shoe Finder"] },
        { title: "Shoes", items: ["All Shoes", "Basketball", "Lifestyle", "Jordan", "Retro Running", "Running"] },
        { title: "Clothing", items: ["All Clothing", "Hoodies & Sweatshirts", "Tracksuits", "Jackets & Vests", "Shorts"] },
        { title: "Accessories", items: ["Bags & Backpacks", "Hats & Headwear", "Socks", "Sunglasses", "Belts"] }

      ]
    },
    {
      name: "Kids",
      subMenu: [
        { title: "Shoes", items: ["All Shoes", "Basketball", "Lifestyle", "Jordan", "Retro Running", "Running"] },
        { title: "Clothing", items: ["All Clothing", "Hoodies & Sweatshirts", "Tracksuits", "Jackets & Vests", "Shorts"] },
        { title: "Accessories", items: ["Bags & Backpacks", "Hats & Headwear", "Socks", "Sunglasses", "Belts"] },
        { title: "Featured", items: ["New Arrivals", "Best Sellers", "Latest Drops", "New in Air Max: Dn8", "Vomero 18", "SNKRS Launch Calendar"] },
        { title: "Shop New", items: ["Men", "Women", "Kids", "Shop All"] },
        { title: "Trending", items: ["24/7 Collection", "Nike Style By", "So Win Collection", "ACG Essentials", "Running Shoe Finder"] },
        { title: "Shoes", items: ["All Shoes", "Basketball", "Lifestyle", "Jordan", "Retro Running", "Running"] },
      ]
    },
    {
      name: "Jordan",
      subMenu: [
        { title: "Featured", items: ["New Arrivals", "Best Sellers", "Latest Drops", "New in Air Max: Dn8", "Vomero 18", "SNKRS Launch Calendar"] },
        { title: "Shop New", items: ["Men", "Women", "Kids", "Shop All"] },
        { title: "Trending", items: ["24/7 Collection", "Nike Style By", "So Win Collection", "ACG Essentials", "Running Shoe Finder"] },
        { title: "Shoes", items: ["All Shoes", "Basketball", "Lifestyle", "Jordan", "Retro Running", "Running"] },
        { title: "Clothing", items: ["All Clothing", "Hoodies & Sweatshirts", "Tracksuits", "Jackets & Vests", "Shorts"] },
        { title: "Accessories", items: ["Bags & Backpacks", "Hats & Headwear", "Socks", "Sunglasses", "Belts"] }

      ]
    },
    {
      name: "Sport",
      subMenu: [
        { title: "Shoes", items: ["All Shoes", "Basketball", "Lifestyle", "Jordan", "Retro Running", "Running"] },
        { title: "Clothing", items: ["All Clothing", "Hoodies & Sweatshirts", "Tracksuits", "Jackets & Vests", "Shorts"] },
        { title: "Accessories", items: ["Bags & Backpacks", "Hats & Headwear", "Socks", "Sunglasses", "Belts"] },
        { title: "Featured", items: ["New Arrivals", "Best Sellers", "Latest Drops", "New in Air Max: Dn8", "Vomero 18", "SNKRS Launch Calendar"] },
        { title: "Shop New", items: ["Men", "Women", "Kids", "Shop All"] },
        { title: "Trending", items: ["24/7 Collection", "Nike Style By", "So Win Collection", "ACG Essentials", "Running Shoe Finder"] },
        { title: "Shoes", items: ["All Shoes", "Basketball", "Lifestyle", "Jordan", "Retro Running", "Running"] },
      ]
    }
  
  ];

  const helpItems = [
    "Order Status", "Shipping & Delivery", "Returns", "Order Cancellation",
    "Size Charts", "Contact Us", "Membership", "Promotions & Discounts", "Product Advice", "Send Us Feedback"
  ]; 

  return (
    <>
      {/* MOBILE TOP NAVBAR */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <Link to="/home">
          <img src={NikeLogo} alt="Nike Logo" className="h-20 cursor-pointer" />
        </Link>

        <div className="flex space-x-4 items-center text-xl">
          
          {/* Search Icon */}
          <div
            onClick={() => dispatch(setIsSearchOpen(true))}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-200 transition cursor-pointer"
          >
            <FaSearch className="text-black hover:text-gray-900 transition" />
          </div>

          {/* User Icon */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-200 transition cursor-pointer">
            <FiUser className="text-black hover:text-gray-900 transition" />
          </div>

          {/* Heart Icon */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-200 transition cursor-pointer">
            <FaRegHeart className="text-black hover:text-gray-900 transition" />
          </div>

          {/* Bag Icon */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-200 transition cursor-pointer">
            <FaShoppingBag className="text-black hover:text-gray-900 transition" />
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => dispatch(setIsMobileMenuOpen(true))}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition text-2xl"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>

      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:block fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-md z-[9999]">
        {/* TOP NAVBAR */}
        <div className="bg-gray-200 hidden md:flex justify-between items-center px-11 text-xs py-2 w-full">
          <div className="flex items-center space-x-4">
            <img src={Jordan} alt="Air Jordan Logo" className="w-6 h-6 cursor-pointer" />
            <img src={Converse} alt="Converse Logo" className="w-6 h-6 cursor-pointer" />
          </div>
          <div className="flex space-x-4 font-semibold">
            <a href="#">Find a Store</a>
            <span>|</span>
            <div className="relative" onMouseEnter={() => dispatch(setIsHelpOpen(true))} onMouseLeave={() => dispatch(setIsHelpOpen(false))}>
              <div className="cursor-pointer">Help</div>
              {isHelpOpen && (
                <div className="absolute top-full mt-0 -right-10 w-56 bg-white shadow-lg rounded-md p-2 border z-[9999]">
                  <h2 className="font-bold text-lg text-black pb-2">Help</h2>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {helpItems.map((item, i) => (
                      <li key={i} className="hover:bg-gray-100 rounded-md cursor-pointer text-sm pt-1 transition">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <span>|</span>
            <a href="#">Join Us</a>
            <span>|</span>
            <a href="#">Sign In</a>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <div className="flex items-center px-6 py-0 w-full">
          <div className="flex-shrink-0">
            <Link to="/home">
              <img src={NikeLogo} alt="Nike" className="px-6 h-14 object-contain" />
            </Link>
          </div>

          <ul className="hidden md:flex justify-center lg:pl-24 space-x-5 text-gray-900 font-semibold text-md flex-grow">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group"
                onMouseEnter={() => dispatch(setActiveMenu(item.name))}
                onMouseLeave={() => dispatch(setActiveMenu(null))}>
                <button className="hover:underline">{item.name}</button>
                {item.subMenu && activeMenu === item.name && (
                  <div className="fixed left-0 w-full bg-white shadow-xl border-t border-gray-300 z-[9999]">
                    <div className="max-w-full mx-auto gap-8 p-6 flex justify-evenly">
                      {item.subMenu.map((sub, subIndex) => (
                        <div key={subIndex}>
                          <h4 className="font-bold text-gray-900 mb-3">{sub.title}</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            {sub.items.map((subItem, subItemIndex) => (
                              <li key={subItemIndex}>
                                <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded-md">{subItem}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* SEARCH BAR */}
          <div className="flex items-center justify-end space-x-4">
            <div className="flex items-center relative group bg-gray-200 rounded-full cursor-pointer"
              onClick={() => dispatch(setIsSearchOpen(true))}>
              <div className="w-8 h-8 flex items-center justify-center bg-black rounded-full bg-transparent group-hover:bg-gray-300 transition">
                <FaSearch className="text-gray-500 transition duration-200 group-hover:text-black focus-within:text-black" />
              </div>
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-transparent focus:outline-none px-2 text-sm w-24 text-gray-500 placeholder-gray-500 focus:text-black transition duration-200 cursor-pointer" 
                readOnly
              />
            </div>
            <FaRegHeart className="text-lg cursor-pointer" />
            <FaShoppingBag className="text-lg cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* SEARCH PANEL */}
      {isSearchOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white px-4 py-4 z-[10000] overflow-y-auto">
          <div className="flex items-center justify-between w-full gap-2 mb-6">
            <img src={NikeLogo} alt="Nike Logo" className="w-10 h-10" />
            <div className="flex items-center bg-gray-200 rounded-full px-3 py-2 w-full max-w-md">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent focus:outline-none text-sm w-full text-gray-700 placeholder-gray-500"
              />
            </div>
            <button className="text-sm font-semibold hover:text-black" onClick={() => dispatch(setIsSearchOpen(false))}>
              Cancel
            </button>
          </div>

          <div className="w-full flex flex-col items-center">
            <h2 className="text-sm font-semibold text-gray-500 mb-4">
              Popular Search Terms
            </h2>
            <div className="flex flex-wrap justify-center gap-3 w-full">
              {[
                "air max", "jordan", "dunks", "jordan 4",
                "air forces", "jordan 1", "basketball shoes"
              ].map((term, index) => (
                <span key={index} className="bg-gray-200 px-4 py-2 rounded-full text-sm font-semibold">
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* HAMBURGER MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-30">
          <div className="fixed right-0 top-0 h-full w-[80%] sm:w-[70%] bg-white p-6 flex flex-col shadow-xl transition-all duration-300 ease-in-out">

            {/* Üst Menü Barı */}
            <div className="flex justify-between items-center mb-6">
              <img src={NikeLogo} alt="Nike" className="w-10 h-10" />
              <button onClick={() => dispatch(resetMobileMenu())}>
                <IoIosCloseCircle className="text-red-500 w-10 h-10" />
              </button>
            </div>

            {/* BACK BUTTON + HEADER */}
            {(mobileActiveMenu || mobileSubMenuTitle) && (
              <div className="flex justify-start gap-3 items-center mb-6">
                <button onClick={() => {
                  if (mobileSubMenuTitle) {
                    dispatch(setMobileSubMenuTitle(null)); // 3. seviye => 2.ye dön
                  } else {
                    dispatch(setMobileActiveMenu(null));   // 2. seviye => 1.e dön
                  }
                }}>
                  <IoIosArrowBack />
                </button>
                <span className="font-semibold text-lg">
                  {mobileSubMenuTitle || mobileActiveMenu?.name}
                </span>
              </div>
            )}

            {/* LEVEL 1: Main Menu */}
            {!mobileActiveMenu && (
              <>
                <ul className="space-y-4 font-medium text-lg mt-4">
                  {menuItems.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => dispatch(setMobileActiveMenu(item))}
                    >
                      {item.name}
                      <IoIosArrowForward />
                    </li>
                  ))}
                </ul>

                {/* SUB-FIXED INFORMATION */}
                <div className="mt-8 space-y-10">

                  {/* Jordan & Converse */}
                  <div className="flex flex-col gap-2 mt-5">
                    <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-0 py-1 rounded-md transition">
                      <img src={Jordan} alt="Jordan" className="w-10 h-10" />
                      <span className="font-semibold">Jordan</span>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-0 py-1 rounded-md transition">
                      <img src={Converse} alt="Converse" className="w-10 h-10" />
                      <span className="font-semibold">Converse</span>
                    </div>
                  </div>

                  <div className="font-semibold text-gray-600">
                    Become a Nike Member for the best products, inspiration and stories in sport.{" "}
                    <span className="underline cursor-pointer font-teko">Learn more</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">Join Us</button>
                    <button className="border border-black px-4 py-1 rounded-full text-sm font-semibold">Sign In</button>
                  </div>
                  <ul className="pt-4 space-y-2 text-sm text-gray-800 border-t">
                    <li className="flex items-center space-x-2"><IoMdHelp className="text-red-500 w-5 h-5"/><span className="font-semibold">Help</span></li>
                    <li className="flex items-center space-x-2"><TbShoppingBag className="w-5 h-5"/><span className="font-semibold">Bag</span></li>
                    <li className="flex items-center space-x-2"><FaBoxOpen className="w-5 h-5"/><span className="font-semibold">Orders</span></li>
                    <li className="flex items-center space-x-2"><BiStore className="w-5 h-5"/><span className="font-semibold">Find a Store</span></li>
                  </ul>
                </div>
              </>
            )}

            {/* LEVEL 2: Sub Menu Headings */}
            {mobileActiveMenu && !mobileSubMenuTitle && (
              <ul className="space-y-4 mt-10">
                {mobileActiveMenu.subMenu?.map((section, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center cursor-pointer font-semibold text-lg space-y-5"
                    onClick={() => dispatch(setMobileSubMenuTitle(section.title))}
                  >
                    <span className="text-gray-800">{section.title}</span>
                    <IoIosArrowForward />
                  </li>
                ))}
              </ul>
            )}

            {/* LEVEL 3: Content of the selected title */}
            {mobileActiveMenu && mobileSubMenuTitle && (
              <ul className="space-y-3 text-sm text-gray-800">
                {mobileActiveMenu.subMenu
                  .find((sec) => sec.title === mobileSubMenuTitle)
                  ?.items.map((item, j) => (
                    <li key={j} className="cursor-pointer hover:font-semibold text-lg">
                      {item}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
