import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../Styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("rigth", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 25,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary py-5 px-12 rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>  
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduccion</p>
        <h2 className={styles.sectionHeadText}>Sobre mi</h2>
      </motion.div>
      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" variants={fadeIn("", "",0.1,1)}>
        ¡Hola! Soy un desarrollador de software con habilidades
        destacadas en JavaScript, React, CSS, Node.js y MongoDB. También, soy
        estudiante de Ingeniería Civil en Computación. Me encanta aprender y
        trabajar de cerca con clientes para crear soluciones eficientes y
        amigables que resuelvan problemas del mundo real. ¡Un placer ser parte
        de tu proyecto
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
