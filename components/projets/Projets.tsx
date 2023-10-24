import React from 'react'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'
import { TbBrandGithub } from 'react-icons/tb'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import projetData from './ProjetData.json';

const Projet = () => {
  return (
    <section 
    id="Projets" 
    className="max-w-contentContainer mx-auto py-10 mdl:pb-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
    <SectionTitle title="Projets réalisés"  />

    <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
    {projetData.projets.map((projet) => (
     <div key={projet.id}>
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href={projet.linkDemo}
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={projet.img}
                alt={projet.title}
                width={100}
                height={100}
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            
            <div>
            
              <h3 className="text-2xl font-bold">{projet.title}</h3>
            </div>
            <p className="bg-textDark text-sm text-white md:text-base p-2 md:p-6 rounded-md">
            {projet.description}
                        </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            {projet.technologies.map((technologie) => (
            <li key={projet.id}>
              {technologie}
            </li>
          ))}
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href={projet.linkGithub}
                target="_blank"
              >
                <TbBrandGithub />
              </a>

              <a
                className="hover:text-textGreen duration-300"
                href={projet.linkDemo}
                target="_blank"
              >
                <BsBoxArrowInUpRight />
              </a>
              
           
            </div>
          </div>
        </div>
        </div>
         ))}
        </div>

    </section>
  )
}

export default Projet