'use client'
import Image from 'next/image'
import React, { useState, memo } from 'react'
import Table from '../images/Table.png'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'

const Card = memo(function Card() {
    const [isfavorite, setIsfavorite] = useState(false);

    // Likes function 
    const togglefavorite = () => {
        setIsfavorite(prev => !prev);
    };

    return (
        <div className='w-full bg-white shadow-lg rounded-lg overflow-hidden'>
            {/* Card Image  */}
            <div className='relative flex items-center justify-center h-[250px] lg:h-[350px]' style={{ backgroundColor: '#F9F7F5' }}>
                <Image 
                    src={Table} 
                    alt="Table"  
                    className='w-[70%] h-[70%] p-6 object-contain'
                    priority
                />
                <div className='absolute top-4 left-4'>
                    <span
                        onClick={togglefavorite}
                        className='text-3xl cursor-pointer transform transition-transform duration-300 hover:scale-110'
                    >
                        {isfavorite ? (
                            <div className="text-red-600 text-2xl mt-1 ml-1 transition-opacity duration-300 ease-in-out">
                                <FaHeart />
                            </div>
                        ) : (
                            <CiHeart className="transition-opacity duration-300 ease-in-out" />
                        )}
                    </span>
                </div>
                <div className='absolute top-4 right-4 bg-white px-2 rounded-full text-sm'>
                    Art de la table
                </div>
            </div>

            {/* Card details  */}
            <div className='p-4'>
                <div className='flex justify-between items-center text-gray-900'>
                    <h1 className='text-xl lg:text-2xl font-semibold'>Title</h1>
                    <h1 className='text-xl lg:text-2xl font-semibold'>0€</h1>
                </div>
                <div className='flex justify-between items-center text-gray-600 mt-2'>
                    <div className='text-[10px] lg:text-sm'>
                        0,35€/Piece <span className='text-[8px] lg:text-xs text-gray-500'>REF :VABGN5</span>
                    </div>
                    <div className='bg-gray-100 px-2 rounded-full text-[10px] lg:text-xs font-medium text-gray-700'>
                        20 pieces
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Card
