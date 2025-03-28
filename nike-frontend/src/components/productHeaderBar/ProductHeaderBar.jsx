import { AdjustmentsHorizontalIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux'
import { setDropdownOpen } from "../../slices/shopSlice"

const sortOptions = ['Featured', 'Newest', 'Price: High-Low', 'Price: Low-High']

const ProductHeaderBar = ({ showFilters, setShowFilters, className = '' }) => {
  const dispatch = useDispatch()
  const isDropdownOpen = useSelector((state) => state.shop.isDropdownOpen)

  return (
    <div className={`sticky top-20 w-full px-10 py-10 flex items-center justify-between font-bold bg-white z-20 ${className}`}>
      <h2 className="text-lg text-gray-800 font-teko">Mallory Swanson (64)</h2>

      <div className="flex items-center gap-6 text-lg text-gray-700 relative">
        {/* Show/Hide Filters */}
        <button
          className="flex items-center gap-1 hover:text-black font-teko"
          onClick={() => setShowFilters(!showFilters)}
        >
          <AdjustmentsHorizontalIcon className="w-4 h-4" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        {/* Sort By */}
        <div className="relative">
          <button
            className="flex items-center gap-1 hover:text-black font-teko"
            onClick={() => dispatch(setDropdownOpen(!isDropdownOpen))}
          >
            Sort By
            {isDropdownOpen ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-10">
              {sortOptions.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-lg"
                  onClick={() => dispatch(setDropdownOpen(false))}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductHeaderBar
