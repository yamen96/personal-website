import React from 'react';
import { motion } from "framer-motion";
import { Animator } from '../../components/helpers/animationHelper';
import  SectionHeader  from '../../components/SectionHeader';
import ExperienceCard from '../../components/ExperienceCard';
import { SiteSection } from '../../components/SiteSection';
import { DateSection, Dot } from './styles';
import { workExperiences } from './Experience';

function Experience () {
  return (
    <SiteSection id={"experience"}>
      <SectionHeader>Work Experience</SectionHeader>
        <div style={{margin: "20px 0"}}>
          {workExperiences.map( (workExperience, index) => (
            <motion.div style={{display: 'flex'}} 
                        key={`${index}-${workExperience.companyName}`}
                        {...new Animator().shouldAnimateOnView().withDelay(0.3 + index*0.2).withDirection(-2).withDuration(0.5).getProps()}>
              <DateSection>
                {workExperience.startDate} - {workExperience.endDate}
                <Dot />
              </DateSection>
              <ExperienceCard {...workExperience} isInitiallyOpen={index === 0}/>
            </motion.div>
          ))}
        </div>
    </SiteSection>
  )
}

export default Experience