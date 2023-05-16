import React, { useState } from 'react';
import { StyledCard, StyledCardHeader, StyledCardContent, 
        DropdownContainer, StyledDateSection, StyledSkillsSection } from './styles';

function ExperienceCard ({positionTitle, companyName, companyLogoPath, experience, startDate, endDate, skills, isInitiallyOpen}) {
  const [ isExpanded, setIsExpanded ] = useState(isInitiallyOpen);

  const handleOnClick = e => {
    setIsExpanded(!isExpanded);
  }

  return <StyledCard>
    <StyledCardHeader onClick={handleOnClick} isExpanded={isExpanded}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img src={companyLogoPath} height={45}/>
        <div style={{paddingLeft: '20px'}}>
          <h1>{positionTitle}</h1>
          <h2>@ {companyName}</h2>
        </div>
      </div>
      <DropdownContainer isExpanded={isExpanded}>
        <img src={"drop-down.png"} width={20}/>
      </DropdownContainer>
    </StyledCardHeader>
    <StyledCardContent isExpanded={isExpanded}>
      <StyledDateSection>
        ({ startDate } - { endDate })
      </StyledDateSection>
      <ul>
        {experience.map((exp) => (<li>{exp}</li>))}
      </ul>
      <StyledSkillsSection>
        {skills.map((skill, index) => (`${index === 0 ? '' : ' • '}${skill}`))}
      </StyledSkillsSection>
    </StyledCardContent>
  </StyledCard>
}

export default ExperienceCard;