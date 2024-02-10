import React from 'react';
import AdainNavBar from '../components/navbar';
import Footer from '../components/footer';
import {motion} from 'framer-motion'

const Printing = () => {


  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardsData = [
    {
      
      description:
        'Our success is measured by the satisfaction of our clients. We take pride in building long-lasting relationships based on trust, reliability, and exceptional service. From initial consultation to final delivery, we are dedicated to exceeding expectations and delivering results that surpass all expectations.',
      frontImage: './assets/print1.JPG',
      
    },
    {
     
        description:
          'We understand the importance of environmental responsibility, which is why we are committed to sustainable practices throughout our operations. From utilizing eco-friendly materials to minimizing waste and emissions, we strive to minimize our ecological footprint and contribute to a greener future.',
        frontImage: './assets/print2.JPG',
        
      },

      {
       
        description:
          'Equipped with cutting-edge technology and state-of-the-art machinery, our printing facility boasts the latest advancements in the industry. From traditional offset printing to modern digital solutions, we have the capabilities to handle projects of any size and complexity.',
        frontImage: './assets/print3.JPG',
        
      },

  ];

  return (
    <React.Fragment>
        <AdainNavBar/>
      <section className="mt-40 flex justify-center items-center gap-10 text-white ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardsData.map((card, index) => (
            <div
              key={index}
            >
              {/* front */}
              <div
              className="front">
                <div className="w-[300px]  h-[320px] bg-transparent cursor-pointer group perspective">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    <div className="absolute backface-hidden w-full h-full">
                      <img  src={card.frontImage} alt="front" className="w-full h-full" />
                    </div>
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                      <div className="mt-10 text-center flex flex-col items-center justify-center h-full text-adainwhite px-2 pb-4 md:pb-24">
                      <motion.p
                      initial="hidden"
                      animate="visible"
                      variants={textVariants}
                      transition={{ duration: 2 }}
                       >{card.description}</motion.p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* back */}
             
              <div className="absolute top-0 back ">
                <img src={card.backImage} alt="back" className="w-[300px] h-[200px]" />
              </div>
            </div>
          ))}
        </div>
      
      </section>
      {/* write up section */}
      <div className='flex justify-center items-center p-10 m-4'>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 2 }}
        
      >
       
       <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
  At <span className="text-green-500">SkyBlue</span>, quality is our top priority.
</h1>

<br/>

<p className="text-lg text-gray-700 leading-relaxed mb-8">
At SkyBlue, we are dedicated to providing unparalleled printing solutions that exceed expectations. With years of industry expertise and a commitment to innovation, we have established ourselves as a premier destination for all your printing needs.
</p>

<br/>

<p className="text-lg text-gray-700 leading-relaxed mb-8">
Our mission is simple: to deliver exceptional printing services that empower our clients to stand out in a competitive market. We strive to blend creativity with precision, ensuring every project we undertake is executed with the utmost attention to detail and craftsmanship.
</p>


      </motion.div>
    </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Printing;
