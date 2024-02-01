import React from 'react';
import { useState } from 'react';
import AdainNavBar from '../components/navbar';
import Footer from '../components/footer';
import {motion} from 'framer-motion'

const CardFlip = () => {
  const [activeCard, setActiveCard] = useState(false);

  const handleFlip = () => {
    setActiveCard(!activeCard);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardsData = [
    {
      
      description:
        'In a world where quality matters, we stand out as a beacon of purity. Our table water undergoes a meticulous purification process that guarantees the removal of impurities, leaving only crisp, refreshing goodness in every drop. We are proud to be the guardians of your hydration, ensuring that what you drink is not just water, but a symbol of purity and well-being.',
      frontImage: './assets/pure1.JPG',
      backImage: '/assets/pure4.JPG',
    },
    {
     
        description:
          'Quality control is paramount in our table water producing factory. Our dedicated team of experts monitors every stage of the production process, conducting rigorous tests to maintain consistency and meet regulatory standards. This commitment to quality is a testament to our dedication to delivering only the best to our customers.',
        frontImage: './assets/pure2.JPG',
        backImage: '/assets/pure5.JPG',
      },

      {
       
        description:
          'Our customers are at the center of everything we do. We understand the importance of trust when it comes to the water you consume. Therefore, we provide transparent information about our processes, source, and quality standards, ensuring that our customers have confidence in the purity of our table water.',
        frontImage: './assets/pure3.JPG',
        backImage: '/assets/img20.JPG',
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
              className={`relative card ${activeCard ? 'cardFlip' : ''}`}
            >
              {/* front */}
              <div
               onMouseEnter={handleFlip}
               onMouseLeave={handleFlip}
              className="front">
                <div className="w-[300px]  h-[320px] bg-transparent cursor-pointer group perspective">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    <div className="absolute backface-hidden w-full h-full">
                      <img  src={card.frontImage} alt="front" className="w-full h-full" />
                    </div>
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                      <div className="mt-10 text-center flex flex-col items-center justify-center h-full text-adainwhite px-2 pb-4 md:pb-24">
                      <motion.p
                initial={{x: -1000}}
                animate={{x: 0}}
                transition={{
                  duration: "2",
                }}>{card.description}</motion.p>
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
        className=''
      >
       
       <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
  At <span className="text-green-500">SkyBlue</span>, quality is our top priority.
</h1>

<br/>

<p className="text-lg text-gray-700 leading-relaxed mb-8">
Welcome to SkyBlue, where purity meets refreshment. Our table water producing factory is committed to delivering high-quality, clean, and refreshing drinking water to quench your thirst and promote a healthy lifestyle. This write-up provides an in-depth look into our state-of-the-art facility, emphasizing our dedication to quality, sustainability, and customer satisfaction.
</p>

<br/>

<p className="text-lg text-gray-700 leading-relaxed mb-8">
  We meticulously source water from pristine environments and subject it to an advanced purification process.
  Our state-of-the-art facilities employ cutting-edge filtration, reverse osmosis, and disinfection methods,
  ensuring that every bottle of our table water meets the highest quality standards.
</p>


      </motion.div>
    </div>
      <Footer/>
    </React.Fragment>
  );
};

export default CardFlip;
