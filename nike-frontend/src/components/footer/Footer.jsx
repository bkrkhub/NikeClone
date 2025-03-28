import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setIsGuide, setOpenMenu, toggleOpenMenu } from "../../slices/footerSlice";
import { IoIosArrowDown } from "react-icons/io";

const guidesMenu = [
  "Nike Air", "Nike Air Force 1", "Nike Air Max", "Nike FlyEase",
  "Nike Flyknit", "Nike Free", "Nike React", "Nike Vaporfly",
  "Nike ZoomX", "Space Hippie"
];

const Footer = () => {
  const openMenu = useSelector((state) => state.footer.openMenu);
  const isGuideOpen = useSelector((state) => state.footer.isGuideOpen);
  const dispatch = useDispatch();

  return (
    <footer className="text-black mt-0 border-gray-300">
      <div className="py-6 border-b border-gray-300">
        <div className="container mx-auto flex flex-col px-6">

          {/* LOGO */}
          <div className="w-full flex justify-center mb-6 mt-10">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/f8aaccc0-9f42-4956-9b6b-3112596a9d01/nike-just-do-it.png"
              alt="Nike Logo"
              className="h-6 object-contain"
            />
          </div>

          {/* NAVIGATION LINKS */}
          <nav className="w-full flex justify-center space-x-6 text-sm text-gray-700 items-center mt-5">
            {["Find a Store", "Help", "Join Us", "Sign In"].map((item, index) => (
              <a key={index} href="#" className="hover:underline font-medium">
                {item}
              </a>
            ))}
          </nav>

          {/* FOOTER MENUS */}
          <div className={`flex flex-wrap lg:justify-center w-full mx-auto lg:px-12 justify-start py-10 font-semibold relative ${openMenu ? "min-h-[400px]" : "min-h-[200px]"}`}>
            {/* Mobile Accordion Footer */}
            <div className="md:hidden">
            {[
              {
                title: "Featured",
                links: ["Air Force 1", "Jordan 1", "Air Max Dn", "Vomero"],
                expandedLinks: ["Metcon", "Air Max 270", "Air Max 90", "Blazer", "Pegasus"]
              },
              {
                title: "Shoes",
                links: ["All Shoes", "Jordan Shoes", "Running Shoes", "Basketball Shoes"],
                expandedLinks: ["Tennis Shoes", "Training Shoes", "Custom Shoes", "Soccer Cleats"]
              },
              {
                title: "Clothing",
                links: ["All Clothing", "Tops & T-Shirts", "Shorts", "Hoodies & Pullovers"],
                expandedLinks: ["Joggers & Sweatpants", "Pants & Tights", "Socks", "NikeLab"]
              },
              {
                title: "Kids",
                links: ["Infant & Toddler Shoes", "Kids Shoes", "Kids Basketball Shoes", "Kids Running Shoes"],
                expandedLinks: ["Kids Clothing", "Kids Backpacks", "Kids Socks", "Kids Sale"]
              },
             ].map((menu, index) => (
              <div key={index} className="mb-4  border-gray-200">
                <button
                  onClick={() => dispatch(toggleOpenMenu(index))}
                  className="flex justify-between w-full py-3 font-semibold text-base"
                >
                  {menu.title}
                </button>
                {openMenu === index && (
                  <ul className="pl-2 pb-3 text-sm space-y-2 text-gray-700 transition-all">
                  {[...menu.links, ...menu.expandedLinks].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="block hover:text-black">{item}</a>
                    </li>
                  ))}
                </ul>
                )}
                </div>
            ))}
            </div>
            
            <div className="hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 space-x-10"
            onMouseEnter={() => dispatch(setOpenMenu(true))}
            onMouseLeave={() => dispatch(setOpenMenu(false))}
            >
              {[
                {
                  title: "Featured",
                  links: ["Air Force 1", "Jordan 1", "Air Max Dn", "Vomero"],
                  expandedLinks: ["Blazer", "Dunk", "Pegasus", "Metcon"],
                },
                {
                  title: "Shoes",
                  links: ["All Shoes", "Jordan Shoes", "Running Shoes", "Basketball Shoes"],
                  expandedLinks: ["Tennis Shoes", "Training Shoes", "Custom Shoes", "Soccer Cleats"],
                },
                {
                  title: "Clothing",
                  links: ["All Clothing", "Tops & T-Shirts", "Shorts", "Hoodies & Pullovers"],
                  expandedLinks: ["Joggers & Sweatpants", "Pants & Tights", "Socks", "NikeLab"],
                },
                {
                  title: "Kids",
                  links: ["Infant & Toddler Shoes", "Kids Shoes", "Kids Basketball Shoes", "Kids Running Shoes"],
                  expandedLinks: ["Kids Clothing", "Kids Backpacks", "Kids Socks", "Kids Sale"],
                },
              ].map((menu, index) => (
                <div key={index} className="relative">
                  <h3 className="font-semibold text-sm mb-3 cursor-pointer">{menu.title}</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {menu.links.map((link, i) => (
                      <li key={i}><a href="#" className="hover:text-black">{link}</a></li>
                    ))}
                  </ul>
                  <div className={`absolute left-0 bg-white transition-all duration-200 z-50 w-full ${openMenu ? "flex" : "hidden"} flex-col`}>
                    {menu.expandedLinks.map((link, i) => (
                      <a key={i} href="#" className="py-2 text-sm text-gray-600 hover:text-black">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER BOTTOM MENU */}
          <div className="mt-10 border-t border-gray-300 pt-5">
            {/* Desktop Mode */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Resources",
                  links: ["Gift Cards", "Find a Store", "Membership", "Nike Journal", "Site Feedback"],
                },
                {
                  title: "Help",
                  links: ["Get Help", "Order Status", "Shipping and Delivery", "Returns", "Order Cancellation"],
                },
                {
                  title: "Company",
                  links: ["About Nike", "News", "Careers", "Investors", "Purpose", "Sustainability"],
                },
                {
                  title: "Promotions & Discounts",
                  links: ["Student", "Military", "Teacher", "First Responders & Medical Professionals", "Birthday"],
                },
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-md mb-3">{section.title}</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {section.links.map((link, i) => (
                      <li key={i}><a href="#" className="hover:text-black">{link}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile Mode */}
            <div className="md:hidden">
              {[
                {
                  title: "Resources",
                  links: ["Gift Cards", "Find a Store", "Membership", "Nike Journal", "Site Feedback"],
                },
                {
                  title: "Help",
                  links: ["Get Help", "Order Status", "Shipping and Delivery", "Returns", "Order Cancellation"],
                },
                {
                  title: "Company",
                  links: ["About Nike", "News", "Careers", "Investors", "Purpose", "Sustainability"],
                },
                {
                  title: "Promotions & Discounts",
                  links: ["Student", "Military", "Teacher", "First Responders & Medical Professionals", "Birthday"],
                },
              ].map((section, index) => (
                <div key={index} className="border-b">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer py-4 font-semibold px-1 text-md list-none">
                      {section.title}
                      <span className="transform transition-transform group-open:rotate-180"><IoIosArrowDown/></span>
                    </summary>
                    <ul className="pl-1 pb-4 text-sm text-gray-700 space-y-2">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <a href="#" className="hover:text-black">{link}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              ))}
            </div>

            {/* COPYRIGHT, GUIDES, LOKASYON */}
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center w-full max-w-7xl mt-10 px-6 gap-4 text-sm text-gray-800 font-semibold">
              <p>© {new Date().getFullYear()} Nike, Inc. All Rights Reserved</p>

              {/* Guides + Links */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-5">
                {/* Guides dropdown */}
                <div className="relative" onMouseEnter={() => dispatch(setIsGuide(true))} onMouseLeave={() => dispatch(setIsGuide(false))} >
                  <button className="flex items-center hover:underline">
                    Guides <IoIosArrowDown className="ml-1"/>
                  </button>
                  {isGuideOpen && (
                    <div className="absolute left-0 bottom-1 bg-white shadow-md border border-gray-200 rounded-md w-48 z-50 p-3">
                      {guidesMenu.map((guide, index) => (
                        <a key={index} href="#" className="block py-1 text-sm text-gray-700 hover:text-black">
                          {guide}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a href="#" className="hover:underline">Terms of Sale</a>
                <a href="#" className="hover:underline">Terms of Use</a>
                <a href="#" className="hover:underline">Nike Privacy Policy</a>

                <a href="#" className="hover:underline flex items-center gap-1">
                  <img
                    src="https://static.nike.com/a/images/w_960,c_limit/3732c58b-d0ad-4c3c-898c-c4b90193312b/image.png"
                    alt="Privacy Logo"
                    className="w-4 h-4"
                  />
                  Your Privacy Choices
                </a>

                <a href="#" className="hover:underline">CA Supply Chains Act</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
