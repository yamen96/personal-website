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
        <motion.div style={{margin: "20px 0"}} {...new Animator().shouldAnimateOnView().withDelay(0.5).withDuration(0.2).getProps()}>

          {workExperiences.map( (workExperience, index) => (
            <div style={{display: 'flex'}} key={`${index}-${workExperience.companyName}`}>
              <DateSection>
                {workExperience.startDate} - {workExperience.endDate}
                <Dot />
              </DateSection>
              <ExperienceCard {...workExperience} isInitiallyOpen={index === 0}/>
            </div>
          ))}
        </motion.div>
    </SiteSection>
  )
}

export default Experience