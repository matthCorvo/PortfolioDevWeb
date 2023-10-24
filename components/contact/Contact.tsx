import React from 'react'
import SectionTitle from '../SectionTitle'

const Contact = () => {
  return (
    <section 
    id="Contact" 
    className="max-w-contentContainer mx-auto py-10 mdl:pb-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
    <SectionTitle title="Contact"  />
    <div>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
        Veuillez me contacter directement par{" "}
        <a className="underline" href="mailto:promatthcorvo@gmail.com">
          mail
        </a>
       
      </p>
      </div>

    </section>
  )
}

export default Contact