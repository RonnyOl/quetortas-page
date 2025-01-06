import React from 'react'

export default function FeaturesCard({product}) {
  return (
    <>
        <div className='features-card rounded-3xl drop-shadow-2xl'>
            <div className='features-card-image '>
            <img className="rounded-t-3xl" src={`${process.env.NEXT_PUBLIC_BASE_URL}/img/products/${product.imageURL}`} alt={product.title} />
            </div>

            <div className='features-card-info text-black flex flex-col py-3 items-center h-56  justify-start w-full'>
            <h2 className='text-4xl font-lucky text-white '>{product.title}</h2>
            <span className='text-2xl font-lunasima text-white pt-6 text-center features-card-info-description'>{product.description}</span>
            </div>
        </div>
        
    </>
  )
}
