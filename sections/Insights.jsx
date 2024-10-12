'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Quiénes somos" textStyles="text-center" />
      {/*<TitleText title={<>Quiénes somos</>} textStyles="text-center" />*/}
      
      <div className="flex justify-center items-center flex-col relative z-10 text-white text-center text-4xl lg:text-3xl mt-10 lg:mx-8">
        Somos Ana Navarrina y Julia Sánchez, dos apasionadas del Marketing que, en un momento dado y de pura casuadldad, se dieron cuenta de que MarkeTeam les hacía falta a ellas y, si les hacía falta a ellas, seguro que a muchos otros profesionales del Marketing también.
      </div>
      
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
