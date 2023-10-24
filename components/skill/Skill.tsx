import React from 'react'
import SectionTitle from '../SectionTitle';
import skillData from './SkillData.json';

const Skill = () => {
  return (

<section
  id="Compétences"
  className="max-w-contentContainer mx-auto py-10 mdl:pb-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
  <SectionTitle title="technologies utilisées" />

  <div className="w-full grid gap-8 text-center bloc-skill">
  {skillData.skills.map((skill) => (
    <div key={skill.id}>
      <h4 className="font-semibold mb-2 text-sm mt-4">{skill.title}</h4>

      <div className="flex items-center flex-col rounded-lg bg-textDark py-4 px-0 ">
        <ul>
          {skill.technologies.map((technologie) => (
            <li key={skill.id} className="text-sm text-white mt-2">
              {technologie}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

    </section>

  )
}

export default Skill