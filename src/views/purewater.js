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

  const cardsData = [
    {
      title: "The King's Man",
      rating: '9.0 Rating',
      description:
        'In a world where quality matters, we stand out as a beacon of purity. Our table water undergoes a meticulous purification process that guarantees the removal of impurities, leaving only crisp, refreshing goodness in every drop. We are proud to be the guardians of your hydration, ensuring that what you drink is not just water, but a symbol of purity and well-being.',
      frontImage: './assets/img1.JPG',
      backImage: '/assets/img2.JPG',
    },
    {
        title: "The King's Man",
        rating: '9.0 Rating',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque assumenda saepe animi maxime libero non quasi, odit natus veritatis enim culpa nam inventore doloribus quidem temporibus amet velit accusamus.',
        frontImage: './assets/img1.JPG',
        backImage: '/assets/img20.JPG',
      },

      {
        title: "The King's Man",
        rating: '9.0 Rating',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque assumenda saepe animi maxime libero non quasi, odit natus veritatis enim culpa nam inventore doloribus quidem temporibus amet velit accusamus.',
        frontImage: './assets/img1.JPG',
        backImage: '/assets/img20.JPG',
      },
      {
        title: "The King's Man",
        rating: '9.0 Rating',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque assumenda saepe animi maxime libero non quasi, odit natus veritatis enim culpa nam inventore doloribus quidem temporibus amet velit accusamus.',
        frontImage: './assets/img1.JPG',
        backImage: '/assets/img20.JPG',
      },
    // Add more card data as needed
    // { title: 'Movie 2', rating: '8.5 Rating', description: 'Description 2', frontImage: './assets/img2.JPG', backImage: '/assets/img21.JPG' },
    // { title: 'Movie 3', rating: '7.5 Rating', description: 'Description 3', frontImage: './assets/img3.JPG', backImage: '/assets/img22.JPG' },
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
      <Footer/>
    </React.Fragment>
  );
};

export default CardFlip;
