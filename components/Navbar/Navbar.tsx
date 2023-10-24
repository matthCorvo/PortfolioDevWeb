import { logo } from '@/public/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import navLinksData from './NavData.json';

const Navbar = () => {

    {/* ============  ============ */}

  return (
    <div 
    className="flex z-40 fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
        <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between ">
         
        {/* ============ Logo ============ */}
        {/* <Link href="/"> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image className="w-14 me-[4rem]" src={logo} alt="logo" />
          </motion.div>
        {/* </Link> */}

        {/* ============ Links ============== */}
        <div className="hidden mdl:inline-flex items-center gap-7">
        <ul className="flex text-[13px] gap-7">
             {navLinksData.navLinks.map((link) => (
             <Link 
             key={link.id}
             href={link.href}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
               <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {link.label}
                </motion.li>   
             </Link>
             ))}
          </ul>
        </div>
        {/* ============== Mobile =========== */}
        <div
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>     

      </div>
    </div>
  )
}

export default Navbar