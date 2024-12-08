'use client'
import React, { useState, useCallback } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Card from '../components/Card'

function Corousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Card Numbers 
  const cards = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]

  // Next button 
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= cards.length - 3 ? 0 : prevIndex + 1
    )
  }, [cards.length])

  // Previous Button 
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? cards.length - 4 : prevIndex - 1
    )
  }, [cards.length])

  return (
    <div className="relative w-full overflow-hidden pb-10">
      <h1 className='text-4xl font-medium py-8'>Articles similaires</h1>
      <div className="flex items-center justify-center">

        {/* Prev Button  */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-4 bg-blue-500 rounded-sm text-white shadow-md hover:bg-blue-300 transition-colors"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Cards  */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-[25%] px-2"
            >
              <Card />
            </div>
          ))}
        </div>

        {/* Next Button  */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-4 bg-blue-500 rounded-sm text-white shadow-md hover:bg-blue-300 transition-colors"
          aria-label="Next slide"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default Corousel