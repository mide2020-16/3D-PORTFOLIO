import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style';
import { textVariant, slideIn } from '../utilities/motion';

const CV = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Know more </p>
        <h2 className={`${styles.sectionHeadText}`}>Get CV.</h2>
      </motion.div>
      <motion.div variants={slideIn("up", "spring", 0.3, 1)}>
        <button className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold uppercase tracking-wider shadow-md shadow-primary rounded-xl">
          Download Cv
        </button>
      </motion.div>
    </>
  );
}

export default CV