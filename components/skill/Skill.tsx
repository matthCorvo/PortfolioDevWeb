import React from 'react'
import SectionTitle from "../SectionTitle";

const Skill = () => {
  return (

<section
  id="Skills"
  className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
  <SectionTitle title="technologies utilisées" />

     <div className="flex flex-row space-x-4">
        <div  className="flex items-center flex-col bg-textDark py-8 px-0 rounded-2xl">
            <h3 className="uppercase">Back end</h3>
        </div>
        <div>
            <h3 className="uppercase">front end</h3>
        </div>
        <div>
            <h3 className="uppercase">Database</h3>
        </div>
        <div>
            <h3 className="uppercase">design</h3>
        </div>
     </div>
    </section>

  )
}

export default Skill