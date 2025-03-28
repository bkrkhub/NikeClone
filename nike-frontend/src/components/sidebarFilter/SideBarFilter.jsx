import { useSelector, useDispatch } from 'react-redux';

import { togglePickup, toggleMobileDrawer,setSortBy,toggleExpandedPrice,toggleFilterOption,toggleSection
} from '../../slices/shopSlice';

import {ChevronDownIcon,ChevronUpIcon,XMarkIcon,
} from '@heroicons/react/24/outline';

import { IoOptionsOutline } from "react-icons/io5";
import './SidebarFilter.css';

const categories = [
  'Shoes', 'Hoodies and Pullovers', 'Jackets & Vests', 'Pants and Tights',
  'Tops and T-Shirts', 'Jerseys', 'Shorts', 'Tights & Leggings',
  'Sports Bras', 'Tracksuits', 'Socks', 'Accessories and Equipment'
];

const filterGroups = [
  { label: 'Gender', type: 'checkbox', options: ['Men', 'Women', 'Unisex'] },
  { label: 'Kids', type: 'checkbox', options: ['Boys', 'Girls'] },
  { label: 'Kids Age', type: 'checkbox', options: ['Big Kids (7-15 yrs)'] },
  { label: 'Sale & Offers', type: 'checkbox', options: ['See Price in Bag', 'Sale'] },
  {
    label: 'Color', type: 'color', options: [
      { name: 'Black', code: '#000000' },
      { name: 'Blue', code: '#1DA1F2' },
      { name: 'Brown', code: '#8B4513' },
      { name: 'Green', code: '#32CD32' },
      { name: 'Grey', code: '#808080' },
      { name: 'Red', code: '#FF0000' },
      { name: 'White', code: '#FFFFFF' },
    ]
  },
  {
    label: 'Shop by Price',
    type: 'checkbox',
    options: ['$0 - $25', '$25 - $50', '$50 - $100', '$100 - $150'],
    expandable: true,
  },
  { label: 'Brand', type: 'checkbox', options: ['Nike Sportswear', 'Nike Pro'] },
  {
    label: 'Sports', type: 'checkbox',
    options: ['Lifestyle', 'Running', 'Training & Gym', 'Basketball', 'Football', 'Soccer', 'Yoga', 'Track & Field']
  },
  { label: 'Best For', type: 'checkbox', options: ['Cold Weather', 'Hot Weather'] },
];

const SidebarFilter = () => {
  const dispatch = useDispatch();
  const {
    pickUpEnabled,
    mobileDrawerOpen,
    sortBy,
    expandedPrice,
    selectedFilters,
    openSections,
  } = useSelector((state) => state.shop);

  const handleCheckboxToggle = (group, option) => {
    dispatch(toggleFilterOption({ group, option }));
  };

  const MobileTopFilters = () => (
    <div className="md:hidden w-full mt-4 space-y-4 px-4">
      <h2 className='text-2xl font-bebas'>Mallory Swanson</h2>
      <div className="flex overflow-x-auto space-x-3 no-scrollbar">
        {categories.map((cat, i) => (
          <button
            key={i}
            className="text-base font-semibold font-bebas whitespace-nowrap px-3 py-1 rounded-full border border-black"
          >
            {cat}
          </button>
        ))}
      </div>
      <div>
        <hr />
        <div className="flex items-center justify-between mt-6">
          <span className="text-lg font-semibold">Pick Up Today at:</span>
          <label className="inline-flex items-center cursor-pointer relative">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={pickUpEnabled}
              onChange={() => dispatch(togglePickup())}
            />
            <div className="w-20 h-10 bg-gray-200 rounded-full peer-checked:bg-black transition-all" />
            <div className="absolute left-0 top-0 w-10 h-10 bg-white rounded-full border peer-checked:translate-x-10 transition-all" />
          </label>
        </div>
        <a href="#" className="text-lg text-black underline mt-1 block">
          Nike Well Collective - Easton
        </a>
      </div>
      <hr />
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold font-teko">64 Results</span>
        <button
          onClick={() => dispatch(toggleMobileDrawer())}
          className="flex items-center gap-1 border px-3 py-1 rounded-full font-teko text-lg"
        >
          Filter
          <IoOptionsOutline className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const MobileDrawer = () => (
    mobileDrawerOpen && (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto px-5 py-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Filter</h2>
          <button onClick={() => dispatch(toggleMobileDrawer())}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6 border-b pb-4">
          <h3 className="text-sm font-semibold mb-3">Sort By</h3>
          {['Featured', 'Newest', 'Price: High-Low', 'Price: Low-High'].map((opt) => (
            <label key={opt} className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                name="sort"
                value={opt}
                checked={sortBy === opt}
                onChange={() => dispatch(setSortBy(opt))}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>

        {filterGroups.map((group, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <h3 className="text-sm font-semibold mb-3">{group.label}</h3>
            {group.type === 'checkbox' &&
              group.options.map((opt, i) => {
                if (group.expandable && !expandedPrice && i > 1) return null;
                return (
                  <label key={opt} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={selectedFilters[group.label]?.includes(opt) || false}
                      onChange={() => handleCheckboxToggle(group.label, opt)}
                    />
                    <span>{opt}</span>
                  </label>
                );
              })}
            {group.expandable && !expandedPrice && (
              <button
                onClick={() => dispatch(toggleExpandedPrice())}
                className="text-sm text-blue-600"
              >
                + More
              </button>
            )}
            {group.type === 'color' && (
              <div className="grid grid-cols-4 gap-4">
                {group.options.map((color) => (
                  <div key={color.name} className="flex flex-col items-center gap-1">
                    <div
                      className="w-6 h-6 rounded-full border"
                      style={{ backgroundColor: color.code }}
                    />
                    <span className="text-xs">{color.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  );

  const DesktopSidebar = () => (
    <aside className="hidden md:block w-80 px-10 py-1 text-lg text-gray-800 sticky top-24 h-[calc(100vh-96px)] overflow-y-auto bg-white">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-medium">Pick Up Today at:</span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={pickUpEnabled}
              onChange={() => dispatch(togglePickup())}
            />
            <div className="w-10 h-5 bg-gray-200 rounded-full peer-checked:bg-black transition-all" />
            <div className="absolute w-4 h-4 bg-white border rounded-full top-0.5 left-0.5 peer-checked:translate-x-5 transition-all" />
          </label>
        </div>
        <a href="#" className="text-sm text-black underline mt-1 block">
          Nike Well Collective - Easton
        </a>
      </div>

      <hr className="my-4" />

      <div className="space-y-4">
        {filterGroups.map((group, idx) => (
          <div key={idx}>
            <button
              className="w-full flex justify-between items-center font-semibold text-gray-900"
              onClick={() => dispatch(toggleSection(group.label))}
            >
              {group.label}
              {openSections[group.label] ? (
                <ChevronUpIcon className="w-4 h-4" />
              ) : (
                <ChevronDownIcon className="w-4 h-4" />
              )}
            </button>
            {openSections[group.label] && (
              <div className="mt-2 pl-1 space-y-2 text-sm">
                {group.type === 'checkbox' &&
                  group.options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedFilters[group.label]?.includes(opt) || false}
                        onChange={() => handleCheckboxToggle(group.label, opt)}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                {group.type === 'color' && (
                  <div className="grid grid-cols-4 gap-3">
                    {group.options.map((color) => (
                      <div
                        key={color.name}
                        className="w-6 h-6 rounded-full border"
                        style={{ backgroundColor: color.code }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );

  return (
    <>
      <MobileTopFilters />
      <MobileDrawer />
      <DesktopSidebar />
    </>
  );
};

export default SidebarFilter;
