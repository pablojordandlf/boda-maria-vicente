'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-3`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          TÍTULO GUAY, ATRACTIVO E IMPACTANTE
        </motion.h1>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="text-container flex justify-center items-center flex-col relative z-10 text-white text-center text-4xl lg:text-3xl mt-10 lg:mx-8">
          La Comunidad de Marketers en la que sí quieres estar
        </div>

        <a href="https://forms.gle/RD7xqVXZqUrEUCEw5" className="w-full flex justify-center mt-4">
          <img
            src="/form.png"
            alt="stamp"
            className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
          />
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;