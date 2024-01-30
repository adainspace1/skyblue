import React from 'react';
import {motion} from 'framer-motion'
const ProductCard = () => {
  return (
    <div 
  
    className="bg-adaingrey text-estatelinkwhite py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-40 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <img src='/assets/img14.JPG'
              className="rounded-lg w-full h-auto"
              width={200} height={100}/>
                
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sky Water</h3>
              <motion.p
                initial={{x: -1000}}
                animate={{x: 0}}
                transition={{
                  duration: "2",
                  delay: "1"
                }}
              className="text-gray-600 mb-4">
    Our premium table water is sourced from the purest natural springs, ensuring a crisp and refreshing taste with every sip. Purified through state-of-the-art filtration processes, our water meets the highest quality standards. Packed in eco-friendly bottles, our table water is not just a thirst-quencher; it's a commitment to health, sustainability, and uncompromised purity.

              </motion.p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <img src='/assets/img27.JPG'
              className="rounded-lg w-full h-auto"
              width={200} height={100}/>
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sky Bread</h3>
              <motion.p
               initial={{x: -1000}}
               animate={{x: 0}}
               transition={{
                 duration: "2",
               }}
              className="text-gray-600 mb-4">
              Immerse your senses in the aroma and taste of our freshly baked bread. Crafted with care and using only the finest ingredients, our bread is a testament to quality and flavor. From classic white and whole grain options to artisanal varieties, each loaf is baked to perfection, delivering a delightful crunch on the outside and a soft, fluffy texture on the inside. Experience the essence of tradition and innovation with every bite.
              </motion.p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className=" rounded-lg p-6 hover:scale-105 transform transition-transform duration-300">
              <div className="mb-4 relative">
              <img src='/assets/img22.JPG'
              className="rounded-lg w-full h-auto"
              width={200} height={100}/>
                {/* Gradient Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sky Printing</h3>
              <p className="text-gray-600 mb-4">
              Elevate your brand with our comprehensive printing services. Whether you need eye-catching business cards, vibrant promotional materials, or professional stationery, we've got you covered. Our cutting-edge printing technology ensures precision and clarity in every print, making your visuals stand out. Collaborate with our design experts to bring your ideas to life, or choose from our range of templates. From concept to delivery, we're committed to transforming your vision into tangible, high-quality printed products.


              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;