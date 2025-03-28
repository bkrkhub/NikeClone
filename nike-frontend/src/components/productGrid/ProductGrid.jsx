import React from "react";

const products = [
  {
    title: "Air Max Dn8",
    subtitle: "Just In",
    image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1369,c_limit/15f311e2-977a-4ed1-9024-45c7d632c7b9/nike-just-do-it.jpg",
    link: "/shop",
  },
  {
    title: "Nike Fast Pack",
    subtitle: "Get Race Ready",
    image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1243,c_limit/f1e61416-8c6c-4314-8896-f56a6c32f303/nike-just-do-it.jpg",
    link: "/shop",
  },
  {
    title: "Abundance Pack",
    subtitle: "In Her Bag",
    image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1369,c_limit/9536042e-4e89-4e94-9ccb-87c0cd4166b7/nike-just-do-it.jpg",
    link: "/shop",
  },
  {
    title: "Comfortable At Any Speed",
    subtitle: "Style By Christian Coleman",
    image: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1369,c_limit/0cfc440d-6407-4aea-895c-3d48e5d04760/nike-just-do-it.jpg",
    link: "/shop",
  },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 px-2 md:px-4 mt-10 w-full">
      {products.map((product, index) => (
        <div key={index} className="relative group overflow-hidden rounded-md">
          {/* Background Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[550px] md:h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Texts and Button */}
          <div className="absolute bottom-10 left-8 text-white flex flex-col space-y-5">
            <p className="text-start md:text-lg font-semibold">{product.subtitle}</p>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">{product.title}</h3>
            <a
              href={product.link}
              className="mt-2 bottom inline-block px-6 py-2 bg-white text-black  font-semibold text-lg rounded-full hover:bg-gray-200 transition w-24"
            >
              Shop
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
