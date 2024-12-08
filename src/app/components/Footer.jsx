import Image from 'next/image'
import Logo from '../images/Group.png';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { CiInstagram } from 'react-icons/ci';
import { LiaLinkedin } from 'react-icons/lia';

function Footer() {
    const infosprat = [
        'À propos',
        'Livraisons & Reprises',
        'Mode d’emploi',
        'F.A.Q'
    ]

    const legal = [
        'Mentions légales',
        'CGU',
        'CGV',
        'Politique de confidentialité'
    ]

    const moncompte = [
        'Accéder à mon compte',
        'Ma liste d’envie',
        'Créer un compte',
        'Mot de passe oublié'
    ]
    return (
        <div className='flex justify-between items-start p-2 lg:p-16 border-t '>
            {/* Logo  Desktop*/}
            <div className='hidden lg:flex  items-center transform hover:scale-105 transition-transform duration-300'>
                <Image src={Logo} alt="Logo" className='w-14 sm:w-24 md:w-28 h-auto' />
            </div>

            {/* Data  */}
            <div className='flex gap-12 flex-col lg:flex-row items-center ml-0 lg:-ml-32 xl:-ml-60 '>
                <div className=' -ml-4 lg:ml-0'>
                    <h1 className='text-lg mb-2'>INFOS PRATIQUES</h1>
                    {infosprat.map((info, index) => (
                        <div key={index} className='text-gray-500 text-sm mb-1'>{info}</div>
                    ))}
                </div>
                <div>
                    <h1 className='text-lg mb-2'>LEGAL</h1>
                    {legal.map((leg, index) => (
                        <div key={index} className='text-gray-500 text-sm mb-1'>{leg}</div>
                    ))}
                </div>
                <div className=' -ml-4 lg:ml-0'>
                    <h1 className='text-lg mb-2'>MON COMPTE</h1>
                    {moncompte.map((mon, index) => (
                        <div key={index} className='text-gray-500 text-sm mb-1'>{mon}</div>
                    ))}
                </div>
            </div>

            <div>
                <h1>NOUS SUIVRE</h1>
                <div className='flex gap-2'>
                    <div className='border rounded-md p-2'><a href="https://x.com/_maazshakeel_"><FaTwitter /></a></div>
                    <div className='border rounded-md p-2'> <a href=""><CiInstagram /></a></div>
                    <div className='border rounded-md p-2'><a href="https://www.linkedin.com/in/maaz-shakeel-4501072a7/"><FaLinkedin /></a></div>
                </div>

                {/* Mobile Logo  */}
                <div className='flex lg:hidden mt-20 items-center transform hover:scale-105 transition-transform duration-300'>
                    <Image src={Logo} alt="Logo" className='w-24  h-auto' />
                </div>
            </div>
        </div>
    )
}

export default Footer
