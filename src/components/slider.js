import React from "react";
import { useState, useEffect } from "react";
import Footer from '../components/footer'
import ProductCard from '../components/productCard'
const Slider = () =>{

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([]);



    useEffect(() => {
        // Load images from the images folder
        const imagePaths = [
          "/assets/img1.JPG", 
          "/assets/img51.JPG", 
          "/assets/img50.JPG", 
          "/assets/img14.JPG", 
          "/assets/img9.JPG", 
          "/assets/img22.JPG",
          "/assets/img24.JPG",
          "/assets/img8.JPG", 
        ];
    
    
        const loadedSlides = imagePaths.map((path) => {
          return (
            <div key={path}>
              <img
                src={path}
                alt="Beach"
                width={1000}
                height={500}
                layout="responsive"
                className=" w-full h-96 object-fit"
              />
            </div>
          );
        });
        setSlides(loadedSlides);
    
        // Change slide every 5 seconds
        const slideTimer = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % loadedSlides.length);
        }, 3000);
    
        // Cleanup timer on unmount
        return () => clearInterval(slideTimer);
      }, []);



      return (
          
        <div className=" ">
          
          <div className="relative h-96 overflow-hidden">
          <div className="absolute rounded-xl inset-0">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } transition-opacity rounded-xl duration-1000 ease-in-out absolute inset-0`}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>
       

      </div>

      
           
        );



}


export default Slider;


