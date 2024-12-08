"use client";
import { useState } from "react";
import { GoDotFill } from 'react-icons/go'
import Machine from '../images/Machine.png'
import Table from '../images/Table.png'
import Image from "next/image";
import { LuCircleSlash2 } from "react-icons/lu";
import { LiaRulerSolid } from 'react-icons/lia'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import AccordionUsage from "./Accordion";

const products = [
    'Art de la table',
    'Mobilier',
    'Nappage',
    'Matériel de salle',
    'Cuisine',
    'Barbecue',
    'Tente',
    'Chauffage',
    'Podium - Piste de danse',
    'Son et lumière',
    'Packs',
    'Consommables'
]

function ProductDetails() {
    const [activeProduct, setActiveProduct] = useState(products[0]);
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const basePrice = 39.50;

    const handleProductClick = (name) => {
        setActiveProduct(name);
        setIsMenuOpen(false);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const totalPrice = (basePrice * quantity).toFixed(2);

    return (
        <div className="px-2 md:px-7 mb-20">
            {/* Product List  */}
            <div className='hidden xl:flex items-center justify-between border-b'>
                {products.map((item, index) => (
                    <div key={index} onClick={() => handleProductClick(item)} className={`flex items-center cursor-pointer gap-2 py-2 rounded-md`}>
                        <div className={` hover:text-blue-500 underline-offset-8 relative group
                        ${activeProduct === item ? 'text-blue-500 ' : 'text-gray-700'}`}>
                            {item}
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300
                            ${activeProduct === item ? 'w-full' : ''}`}></span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Product list button  */}
            <div className="xl:hidden relative">
                <button
                    onClick={toggleMenu}
                    className="w-full py-2 px-4 bg-white border rounded-md shadow-sm flex items-center justify-between"
                >
                    <span>{activeProduct}</span>
                    <svg
                        className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div className={`absolute z-50 w-full mt-1 bg-white border rounded-md shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}>
                    {products.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleProductClick(item)}
                            className={`px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors duration-200
                            ${activeProduct === item ? 'text-blue-500 bg-blue-50' : 'text-gray-700'}`}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Showcase  */}
            <div className="flex items-center gap-1 mt-3">Home <span className="flex text-gray-400 items-center gap-1"><GoDotFill />{activeProduct}</span></div>

            {/* main  */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center relative">

                {/* Images  */}
                <div className="w-full md:w-[50%] h-[300px] md:h-[500px] flex items-center justify-center bg-gray-100 rounded-lg mt-3">
                    <div className="absolute top-5 left-3 ">
                        <Image src={Table} alt="Table" width='auto' height='auto' className="w-8 md:w-14 h-8 md:h-14 object-cover bg-white p-0.5 md:p-2 mb-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity" />
                        <Image src={Table} alt="Table" width='auto' height='auto' className="w-8 md:w-14 h-8 md:h-14 object-cover bg-white p-0.5 md:p-2 mb-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity" />
                        <Image src={Table} alt="Table" width='auto' height='auto' className="w-8 md:w-14 h-8 md:h-14 object-cover bg-white p-0.5 md:p-2 mb-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity" />
                        <Image src={Table} alt="Table" width='auto' height='auto' className="w-8 md:w-14 h-8 md:h-14 object-cover bg-white p-0.5 md:p-2 mb-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity" />
                    </div>
                    <Image src={Machine} alt="Machine" className="w-[90%] md:w-[65%] md:h-[65%] h-[90%] object-cover" />
                </div>


                {/* Details  */}
                <div className="w-full md:w-[50%] h-[300px] md:h-[500px] px-0 md:px-8 py-2 flex flex-col justify-between ">
                    <div>
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-semibold mb-4">Cheese – appareil à raclette 1/2 roue</h1>
                            <div
                                onClick={toggleFavorite}
                                className={`text-3xl -mt-3 cursor-pointer transform transition-transform duration-300 hover:scale-110`}
                            >
                                {isFavorite ?
                                    <CiHeart className="transition-opacity duration-300 ease-in-out" />
                                    :
                                    <div className="text-red-600 text-2xl mr-1 transition-opacity duration-300 ease-in-out">
                                        <FaHeart />
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="text-xl  mb-4 flex items-center gap-1">{totalPrice}€ <span className="text-sm text-gray-500">/piece</span></div>
                        <div className="border-y py-4 mb-4 flex items-center gap-5">
                            <p className=" flex items-center gap-1"><span className="text-gray-500 text-2xl"><LiaRulerSolid /></span>20cm</p>
                            <p className=" flex items-center gap-1"><span className="text-gray-500"><LuCircleSlash2 /></span>50cm</p>
                        </div>

                        <div className=" mb-8 text-gray-500 text-xs">
                            <p>Location appareil à raclette - Raclette traditionnelle 1/2 roue</p>
                            <p>Réglable en hauteur</p>
                            <p>Appareil à raclette professionnel</p>
                            <p>Boîtier de chauffe horizontal réglable en hauteur</p>
                            <p>.</p>
                            <p>220V</p>
                            <p>900W</p>
                        </div>
                    </div>

                    {/* Buttons  */}
                    <div className="flex items-center justify-between gap-4 border-t pt-3">
                        <div className="flex items-center border rounded-md w-[30%]">
                            <button
                                onClick={decreaseQuantity}
                                className="px-4 py-2 text-xl font-bold text-blue-600 hover:bg-blue-50 rounded-l-md transition-colors"
                            >
                                -
                            </button>
                            <span className="flex-1 text-center py-2">{quantity}</span>
                            <button
                                onClick={increaseQuantity}
                                className="px-4 py-2 text-xl font-bold text-blue-600 hover:bg-blue-50 rounded-r-md transition-colors"
                            >
                                +
                            </button>
                        </div>
                        <button className="bg-blue-300 hover:bg-blue-500 text-white py-3 rounded-md w-[70%]  transition-all duration-200 font-semibold">
                            Ajouter au panier
                        </button>
                    </div>

                </div>
            </div>

            {/* Description  */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-32 md:mt-5">
                <div className="w-full md:w-[50%]  h-48">
                    <h1 className="text-xl mb-5">Description produit</h1>
                    <p className="text-gray-500 text-sm w-[90%]">Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".</p>
                </div>
                <div className="w-full md:w-[50%]  flex items-center mt-10 md:mt-0 px-0 md:px-8">
                    <AccordionUsage/>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails
