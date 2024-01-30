import React from 'react'
import Navbar from '../components/navbar'
import Slider from '../components/slider'
import ScrollTop from '../components/scrollTop'
import ProductCard from '../components/productCard'
import Footer from '../components/footer'
const Home = () => {
  return (
    <div className='bg-white'>
        <Navbar/>
        <Slider/>
        <ProductCard/>
        <Footer/>

        


       

        

       
        

        <ScrollTop/>
       
    </div>
  )
}

export default Home