import React from 'react';
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
            <div style={{display: 'flex'}} key={`${index}-${workExperience.companyName}`}>
              <DateSection>
                {workExperience.startDate} - {workExperience.endDate}
                <Dot />
              </DateSection>
              <ExperienceCard {...workExperience} isInitiallyOpen={index === 0}/>
            </div>
          ))}
        </div>

    </SiteSection>
  )
}

export default Experience