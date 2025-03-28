import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowFilters } from '../../slices/shopSlice';
import InfoCarousel from '../infoCarousel/InfoCarousel';
import ProductHeaderBar from '../productHeaderBar/ProductHeaderBar';
import SidebarFilter from '../sidebarFilter/SideBarFilter';
import ProductCard from '../productCard/ProductCard';

const items = [
  {
    id: 1,
    type: "product",
    name: 'Mallory Swanson "So Win"',
    desc: 'Adult Nike Soccer T-Shirt',
    colors: '3 Colors',
    price: '$45',
    tag: 'Just In',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/85c1b26c-cc82-43be-8527-4d4f99298c70/MS+U+NK+TEE+MALLORY+QS.png',
  },
  {
    id: 2,
    type: "product",
    name: 'Mallory Swanson "So Win"',
    desc: "Big Kids' Nike Soccer T-Shirt",
    colors: '1 Color',
    price: '$35',
    tag: 'Just In',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f7174cf8-477b-42ec-9fd7-cbc4284932cf/CORE+COTTON+SHORT+SLEEVE+TEE.png',
  },
  {
    id: 3,
    type: "product",
    name: 'Chicago Red Stars 2024 Stadium Primary',
    desc: 'Women\'s Nike Dri-FIT NWSL Replica Jersey',
    colors: '1 Color',
    price: '$95',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bd6b2025-15d2-4f3d-a67b-93d9aefb3b1d/WOMENS+REPLICA+V-NECK+SOCCER+J.png',
  },
  {
    id: 4,
    type: "product",
    name: 'Mallory Swanson USWNT',
    desc: "Women's Nike Soccer T-Shirt",
    colors: '1 Color',
    price: '$35',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/82e9fe4f-5cf7-4a7c-aa53-c0057904341a/USWNT+TEE+-+NAME+AND+NUMBER.png',
  },
  {
    id: 5,
    type: "banner",
    image: 'https://static.nike.com/a/images/w_1920,c_limit/0b75d12f-4009-46a0-9e2f-a2f5f36210ea/image.png',
  },
  {
    id: 6,
    type: "product",
    name: 'Nike Field General',
    desc: "Women's Shoes",
    colors: '2 Color',
    price: '$100',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1208ea13-a8f7-4095-aaeb-d280c4094811/WMNS+NIKE+FIELD+GENERAL.png',
  },
  {
    id: 7,
    type: "product",
    name: 'Nike LD-1000',
    desc: "Women's Shoes",
    colors: '1 Colors',
    price: '$100',
    tag: 'Best Seller',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/943c76dd-88f0-42fe-b022-e13f4b110649/W+LD-1000.png',
  },
  {
    id: 8,
    type: "product",
    name: 'Nike Pro Indy Plunge',
    desc: "Women's Medium-Support Padded Sports Bra",
    colors: '1 Color',
    price: '$55',
    tag: 'Sustainable Materials',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5d9dfc25-2a68-460a-98ec-231ff62edfff/W+NP+INDY+PLUNGE+BRA+BOLD.png',
  },
  {
    id: 9,
    type: "product",
    name: 'Nike One Fitted',
    desc: "Women's Dri-FIT Short-Sleeve Top",
    colors: '1 Color',
    price: '$55',
    tag: 'Sustainable Materials',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2ab80ef4-dfea-41d9-89a9-02398dac55d1/W+NK+ONE+FITTED+DF+SS+TOP+SP.png',
  },
  {
    id: 10,
    type: "product",
    name: 'Nike 24.7 ImpossiblySoft',
    desc: "Women's Dri-FIT Mid-Rise Joggers",
    colors: '1 Color',
    price: '$95',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8d9cd81d-e12d-4630-8b5d-58b82c4ec78d/W+NK+24.7+DF+MR+JOGGER+SOFT.png',
  },
  {
    id: 11,
    type: "product",
    name: 'Nike Sportswear',
    desc: "Women's Oversized Jacket",
    colors: '1 Color',
    price: '$119.97',
    tag: 'Sustainable Materials',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/31a9fd93-89f1-4f7c-9952-5fa498bd95c7/W+NSW+STREET+SVNR+JKT.png',
  },
];

const ShopPage = () => {
  const dispatch = useDispatch()
  const showFilters = useSelector((state) => state.shop.showFilters)

  return (
    <div className="lg:mt-24 *:overflow-x-hidden">
      <InfoCarousel />

      <div className="w-full lg:px-10 md:h-[400px] sm:h-[600px]">
        <img
          src="https://static.nike.com/a/images/w_2880,h_1410,c_fill,f_auto/ca985541-53cf-4274-850d-ff312f493924/image.jpg"
          alt="Nike Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <ProductHeaderBar
        showFilters={showFilters}
        setShowFilters={(value) => dispatch(setShowFilters(value))}
        className="hidden md:flex"
      />

<div className="md:flex">
  {showFilters && (
    <div className="w-full h-full md:w-80 lg:w-80 shrink-0">
      <SidebarFilter />
    </div>
  )}

  <div className="flex-grow grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 px-4 lg:px-10 mt-6">
    {items.map((item) =>
      item.type === 'product' ? (
        <div key={item.id} className="w-full">
          <ProductCard product={item} />
        </div>
      ) : (
        <div key={item.id} className="md:col-span-2 col-span-full">
          <img
            src={item.image}
            alt="Banner"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      )
    )}
  </div>
</div>

    </div>
  )
};

export default ShopPage;
