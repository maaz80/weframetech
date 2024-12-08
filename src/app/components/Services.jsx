import Image from 'next/image'
import Icon1 from '../images/icon1.png'
import Icon2 from '../images/icon2.png'
import Icon3 from '../images/icon3.png'
import Icon4 from '../images/icon4.png'
import Buffet from '../images/Buffet.png'
import { IoSearch } from 'react-icons/io5'
import { LuArrowRight } from 'react-icons/lu'

function Services() {
    return (
        <div className='mb-20'>
            {/* Service  */}
            <div className='bg-gradient-to-b from-pink-100 to-white w-full p-10 flex flex-col items-center justify-center mt-20'>
                <div className='text-center'>
                    <h1 className='text-3xl font-medium'>On s’occupe de <span className='font-semibold text-blue-600'>tout</span></h1>
                    <div className='text-sm text-gray-700'>Office ipsum you must be muted. It meeting commitment busy pain.</div>
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-center  mt-10'>

                    <div className='flex items-center lg:items-start text-center justify-center gap-2 flex-col mt-10 '>
                        <div className='flex items-center justify-center gap-2 ml-0 lg:ml-7'>
                            <Image src={Icon1} alt="Icon1" className='w-12 h-12' />
                            <div className='h-0.5 w-36 bg-red-900 hidden lg:block'></div>
                        </div>
                        <h1 className='text-sm'>Livraison & Reprise</h1>
                        <p className='text-xs ml-2.5'>Selon vos besoins</p>
                    </div>

                    <div className='w-0.5 h-24 bg-red-800 mt-5 rounded-xl lg:hidden block'></div>

                    <div className='flex items-center lg:items-start text-center justify-center gap-2 flex-col mt-10 '>
                        <div className='flex items-center justify-center gap-2  ml-0 lg:ml-7'>
                            <Image src={Icon2} alt="Icon1" className='w-14 h-12' />
                            <div className='h-0.5 w-36 bg-red-900 hidden lg:block'></div>
                        </div>
                        <h1 className='text-sm'>Livraison & Reprise</h1>
                        <p className='text-xs ml-2.5'>Selon vos besoins</p>
                    </div>

                    <div className='w-0.5 h-24 bg-red-800 mt-5 rounded-xl lg:hidden block'></div>

                    <div className='flex items-center lg:items-start text-center justify-center gap-2 flex-col mt-10 '>
                        <div className='flex items-center justify-center gap-2  ml-0 lg:ml-7'>
                            <Image src={Icon3} alt="Icon1" className='w-12 h-12' />
                            <div className='h-0.5 w-36 bg-red-900 hidden lg:block'></div>
                        </div>
                        <h1 className='text-sm'>Livraison & Reprise</h1>
                        <p className='text-xs ml-2.5'>Selon vos besoins</p>
                    </div>

                    <div className='w-0.5 h-24 bg-red-800 mt-5 rounded-xl lg:hidden block'></div>

                    <div className='flex items-center justify-center gap-2 flex-col mt-10 '>
                        <Image src={Icon4} alt="Icon1" className='w-12 h-12' />

                        <h1 className='text-sm'>Livraison & Reprise</h1>
                        <p className='text-xs ml-2.5'>Selon vos besoins</p>
                    </div>

                </div>
            </div>

            {/* Image showcase  */}
            <div className='w-full flex flex-col lg:flex-row gap-4  items-center justify-between p-2 lg:p-14'>
                <div className='w-full lg:w-[50%] h-[300px] rounded-lg'>
                    <Image src={Buffet} alt='image' width='auto' height='auto' className='w-full h-full object-cover rounded-lg' />
                </div>
                <div className='w-full lg:w-[50%] min-h-[300px] rounded-lg p-2 lg:p-4  bg-pink-100'>
                    <h1 className='text-3xl font-medium mb-5'>S'inscrire & economiser <span className='text-blue-600 font-semibold '>10%</span></h1>
                    <p className='mb-10'>Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.</p>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-1">
                        {/* Search  */}
                    <div className='relative w-full lg:w-[75%]   transition-all duration-300'>
                        <input
                            type="text"
                            placeholder='john@doe.com'
                            className='w-full h-10 px-1 md:px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300 text-xs md:text-base'
                        />
                        <div className='absolute right-1 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors duration-300 text-xs md:text-base'>
                            <IoSearch />
                        </div>
                    </div>

                    {/* Button  */}
                    <button className="bg-blue-300 hover:bg-blue-500 text-white py-2 rounded-md w-full lg:w-[25%]  transition-all duration-200 font-semibold ">
                    <div className="flex items-center justify-center">S’inscrire <LuArrowRight /></div>
                    </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services
