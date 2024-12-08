import Card from '../components/Card'
import React from 'react'

function Collections() {
    const cards = Array(3).fill(null)

    return (
        // Collection of cards 
        <div className='px-0 md:px-8 mt-20'>
            <div className='flex flex-col md:flex-row justify-between item-start md:items-center gap-5 py-5'>
                <h1 className='text-3xl font-medium'>Ces produits pourraient vous intéresser</h1>
                <div className='underline'>Voir toute la collection</div>
            </div>
            <div className="flex justify-between items-center flex-wrap gap-5">
                {cards.map((_, index) => (
                    <div key={index} className='w-[450px]'>
                        <Card />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Collections