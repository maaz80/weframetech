"use client";
import React, { useState } from 'react';
import Logo from '../images/Group.png';
import Image from 'next/image';
import { IoSearch } from "react-icons/io5";
import { SlBulb } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

const navItems = [
    {
        name: 'Inspirations',
        icon: <SlBulb />
    },
    {
        name: 'Mes favoris',
        icon: <CiHeart />
    },
    {
        name: 'Panier',
        icon: <CiShoppingCart />
    }
];

const NavItem = ({ item, isActive, onClick }) => (
    <div
        onClick={onClick}
        className={`flex items-center cursor-pointer gap-2 px-2 sm:px-3 md:px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105
        ${isActive ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-500'}`}
    >
        <span className='text-lg sm:text-xl transition-all duration-300'>{item.icon}</span>
        <span className='text-sm lg:text-base transition-all duration-300'>{item.name}</span>
    </div>
);

function Navbar() {
    const [activeItem, setActiveItem] = useState(navItems[2].name);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // To select active item 
    const handleNavItemClick = (name) => {
        setActiveItem(name);
    };

    // Open and close menu in mobile view 
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className="relative">
            <nav className='w-full h-20 bg-white flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 transition-all duration-300 ease-in-out'>
                <div className='flex items-center transform hover:scale-105 transition-transform duration-300'>
                    <Image src={Logo} alt="Logo" className='w-14 sm:w-24 md:w-28 h-auto' />
                </div>

                {/* Search bar  */}
                <div className='relative w-[50%] md:w-1/2 mr-0 md:mr-10 transition-all duration-300'>
                    <input
                        type="text"
                        placeholder='Rechercher un produit'
                        className='w-full h-10 px-1 md:px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300 text-xs md:text-base'
                    />
                    <div className='absolute right-1 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors duration-300 text-xs md:text-base'>
                        <IoSearch />
                    </div>
                </div>

                {/* Nav items  */}
                <div className='hidden lg:flex items-center gap-2 md:gap-3'>
                    {navItems.map((item) => (
                        <NavItem
                            key={item.name}
                            item={item}
                            isActive={activeItem === item.name}
                            onClick={() => handleNavItemClick(item.name)}
                        />
                    ))}
                </div>
                {/* Profile for mobile */}
                <div className='flex items-center gap-2 ml-2 sm:ml-4' onClick={toggleMenu}>
                    <div className='w-5 md:w-8 h-5 md:h-8 bg-gray-200 rounded-full flex justify-center items-center transform hover:scale-110 transition-all duration-300 hover:bg-blue-100 cursor-pointer'>
                        <span className='text-gray-500 text-base sm:text-lg font-bold'>A</span>
                    </div>
                    <div className='flex items-center gap-1 text-gray-700 hover:text-blue-500 cursor-pointer transition-all duration-300 transform hover:scale-105'>
                        <span className='text-sm sm:text-base'>FR</span>
                        <MdKeyboardArrowDown size={20} className='transition-transform duration-300 group-hover:rotate-180' />
                    </div>
                </div>
            </nav>

            {/* for desktop  */}
            <div className={`md:hidden z-50 absolute top-20 right-0 w-full bg-white shadow-lg transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <div className='flex flex-col p-4 gap-3'>
                    {navItems.map((item) => (
                        <NavItem
                            key={item.name}
                            item={item}
                            isActive={activeItem === item.name}
                            onClick={() => {
                                handleNavItemClick(item.name);
                                toggleMenu();
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;