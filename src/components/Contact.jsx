import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../Styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setform] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSumbit = (e) => {};

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=" flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Mantengamonos en contactos</p>
        <h3 className={styles.sectionHeadText}>Contactame</h3>
        <form
          ref={formRef}
          onSubmit={handleSumbit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu Nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Cual es tu nombre?"
              className="bg-black-200 py-4 px-4 rounded-lg text-white placeholder:text-secundary outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Cual es tu Correo?"
              className="bg-black-200 py-4 px-4 rounded-lg text-white placeholder:text-secundary outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu Mensaje</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Cual es el mensaje que me quieres dejar?"
              className="bg-black-200 py-4 px-4 rounded-lg text-white placeholder:text-secundary outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className=" bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-sm shadow-primary rounded-2xl"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div> 

      <motion.div variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
