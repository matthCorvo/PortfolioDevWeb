import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
    
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Matthieu CORVO
        <span className="text-textDark mt-2 lgl:mt-4">
        Développeur Full-Stack
        </span>
      </motion.h1>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium" >

      <a href="https://github.com/noorjsdivs" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="group bg-gray-900 font-semibold  text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none "
        >
          qui suis-je ?
        </motion.button>
      </a>

      <a href="https://github.com/noorjsdivs" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="group border-solid border-2 border-black-600 bg-white-900 font-semibold  text-dark px-7 py-3 flex items-center gap-2 rounded-full"
        >
           mon CV
        </motion.button>
      </a>
      </div>


    </section>
  );
};

export default Banner;