import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import instaprofile from '../assets/XperienceInstaProfile.png';
import mockUpPhoto from '../assets/iPhone 16 Pro mockup natural titanium.jpg';
import touringEvent from '../assets/Choose account type.svg';
import release from '../assets/release.svg';

const Plan = () => {
  // Framer Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.4 }, // Delay based on index
    }),
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      
      className="w-full h-auto md:h-screen bg-[#faf9f6] flex flex-col gap-4 px-8 py-4 items-center justify-center -z-40"
    >
      <header>
        <h1 className="font-normal text-3xl md:text-2xl xl:text-4xl text-[#303030]">
          To make our vision a <span className="font-bold">Reality</span> we will ...
        </h1>
      </header>
      <div ref={ref} className="w-full h-auto md:h-4/5 flex flex-col md:flex-row items-start justify-start md:justify-center gap-5 py-4">
        <motion.div
          className="w-[90%] md:w-1/4 h-[500px] border-2 border-[#303030] rounded-3xl relative overflow-hidden"
          custom={0} 
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={cardVariants}
        >
          <div className="p-4">
            <p className="mt-2 flex flex-col gap-0">
              <span>... grow our audience</span>
              <span className="text-xl font-bold">Social media marketing</span>
            </p>
            <img
              src={instaprofile}
              alt="people icon"
              className="absolute -bottom-72 rounded-3xl"
            />
          </div>
        </motion.div>
        <motion.div
          className="w-[90%] md:w-1/4 h-[500px] border-2 border-[#303030] rounded-3xl relative overflow-hidden"
          custom={1} 
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={cardVariants}
        >
          <div className="p-4">
            <p className="mt-2 flex flex-col gap-0">
              <span>... develop and refine</span>
              <span className="text-xl font-bold">Xperience 0.1</span>
            </p>
            <img
              src={mockUpPhoto}
              alt="people icon"
              className="absolute -bottom-24 rounded-3xl"
            />
          </div>
        </motion.div>
        <motion.div
          className="w-[90%] md:w-1/4 h-[500px] border-2 border-[#303030] rounded-3xl relative overflow-hidden"
          custom={2} 
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={cardVariants}
        >
          <div className="p-4">
            <p className="mt-2 flex flex-col gap-0">
              <span>... prepare for</span>
              <span className="text-xl font-bold">Touring events</span>
            </p>
            <div className="w-fit h-fit rounded-3xl border-3 border-[#303030]">
              <img
                src={touringEvent}
                alt="people icon"
                className="absolute -bottom-56 scale-75"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-[90%] md:w-1/4 h-[500px] border-2 bg-[#121212] text-[#faf9f6] border-[#303030] rounded-3xl relative overflow-hidden"
          custom={3} 
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={cardVariants}
        >
          <div className="p-4">
            <p className="mt-2 flex flex-col gap-0">
              <span>... release</span>
              <span className="text-xl font-bold">Xperience 0.1</span>
            </p>
            <img
              src={release}
              alt="people icon"
              className="absolute -bottom-24 rounded-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Plan;
