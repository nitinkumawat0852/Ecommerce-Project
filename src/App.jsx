import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import TopProducts from './Components/TopProducts/TopProducts';
import Subscribe from './Components/Subscribe/Subscribe';
import Textimonials from './Components/Testimonials/Textimonials.jsx'
import Footer from './Components/Footer/Footer.jsx';

function App() {
  const [orderPopup,setorderPopup] = useState(false);

  const handleOderPopup =()=>{
    setorderPopup(!orderPopup);
  }

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
    <Navbar handleOderPopup={handleOderPopup}/>
    <Hero handleOderPopup={handleOderPopup}/>
    <Products/>
    <TopProducts handleOderPopup={handleOderPopup}/>
      <Banner/>
      <Subscribe/> 
      <Textimonials/>
      <Footer handleOderPopup={handleOderPopup}/>
    </div>
  );
}

export default App;