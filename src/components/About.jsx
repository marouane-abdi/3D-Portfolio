import React from 'react'
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn , textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index , title , icon}) => {

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring" , 0.5 * 
        index, 0.75)}
        className="w-full green-pink-gradient p-[1px]
        rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt='web-development'
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>

      </motion.div>
    </Tilt>
  );
}

const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction</p>
        <h2 className={styles.sectionHeadText}>
          Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] 
        max-w-3xl leading-[30px]"
      >
        I'm a dedicated engineering student with a passion for applying my technical skills to real-world problems. 
        My journey has led me to work on diverse projects, including developing sophisticated algorithms for arbitrage 
        opportunities in sports betting and crafting efficient web scraping tools to analyze odds across multiple platforms.
        This experience has honed my ability to not only tackle complex challenges but also to innovate solutions that drive 
        efficiency and effectiveness.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  );
}

export default SectionWrapper(About , "about")