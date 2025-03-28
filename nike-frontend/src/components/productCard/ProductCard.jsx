import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='hover:scale-105 duration-300'>
        <img
            src={product.image}
            alt={product.name}
            className='w-full object-cover'
        />

        {product.tag && (
            <p className='text-[12px] text-[#e06000] font-semibold mt-2'>
                {product.tag}
            </p>
        )}
        <h3 className='text-[13px] font-semibold mt-1'>{product.name}</h3>
        <p className='text-[13px] text-gray-500'>{product.desc}</p>
        <p className='text-[13px] text-gray-500'>{product.colors}</p>
        <p className='text-[13px] mt-1'>{product.price}</p>
    </div>
  );
};

export default ProductCard;