import dynamic from 'next/dynamic';

// Dynamically load heavy components
const Navbar = dynamic(() => import('./components/Navbar'));
const ProductDetails = dynamic(() => import('./components/ProductDetails'));
const Corousel = dynamic(() => import('./components/Corousel'));
const Collections = dynamic(() => import('./components/Collections'));
const Services = dynamic(() => import('./components/Services'));
const Footer = dynamic(() => import('./components/Footer'));

function page() {
  return (
    <div>
      <Navbar />
      <ProductDetails />
      <div className='px-2 md:px-8'>
        <Corousel />
      </div>
      <div className='px-2 md:px-8'>
        <Collections />
      </div>
      <Services />
      <Footer />
    </div>
  )
}

export default page
