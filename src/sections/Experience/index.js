import React, { useState } from 'react';
import { Animator } from '../../components/helpers/animationHelper';
import  SectionHeader  from '../../components/SectionHeader';
import ExperienceCard from '../../components/ExperienceCard';
import { SiteSection } from '../../components/SiteSection';
import  Button  from '../../components/Button';
import { DateSection, Dot, Buttons } from './styles';
import { workExperiences } from './Experience';
import { motion } from 'framer-motion';

function Experience () {
  const [ showAll, setShowAll ] = useState(false);
  const [ expandAll, setExpandAll ] = useState(true);
  const visibleList = workExperiences.slice(0, showAll ? workExperiences.length : 3);

  return (
    <SiteSection id={"experience"}>
      <SectionHeader>Work Experience</SectionHeader>
        <div style={{margin: "20px 0"}}>
          {visibleList.map( (workExperience, index) => (
            <div style={{display: 'flex'}} key={`${index}-${workExperience.companyName}`}>
              <DateSection>
                {workExperience.startDate} - {workExperience.endDate}
                <Dot />
              </DateSection>
              <ExperienceCard {...workExperience} isInitiallyOpen={expandAll}/>
            </div>
          ))}
          <Buttons style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}
            {...new Animator().shouldAnimateOnView().withDelay(visibleList.length*0.1).withDirection(-2).withDuration(0.5).getProps()}>
            <Button onClick={()=> {setShowAll(!showAll)}}>{showAll ? "Show Less" : "Show More"}</Button>
            <Button onClick={()=> {setExpandAll(!expandAll)}}>{expandAll ? "Hide All Details" : "Expand All Details"}</Button>
          </Buttons>
        </div>
    </SiteSection>
  )
}

export default Experience