import React, { useState, useEffect } from 'react';
import { Animator } from '../../components/helpers/animationHelper';
import { StyledCard, StyledCardHeader, StyledCardContent, 
        DropdownContainer, StyledDateSection, StyledSkillsSection } from './styles';

function ExperienceCard ({positionTitle, companyName, companyLink, companyLogoPath, experience, startDate, endDate, skills, isInitiallyOpen}) {
  //don't allow card to expland if skills or experience are not provided
  const isExpandable = !!(experience || skills);
  const [ isExpanded, setIsExpanded ] = useState(isExpandable && isInitiallyOpen);

  const handleOnClick = e => {
    if (!isExpandable) return;
    setIsExpanded(!isExpanded);
  }

  useEffect(() => {
    if (!isExpandable) return;
    setIsExpanded(isInitiallyOpen);
}, [isInitiallyOpen]);

  return <StyledCard {...new Animator().shouldAnimateOnView().withDelay(0.2).withDirection(-2).withDuration(0.5).getProps()}>
      <StyledCardHeader onClick={handleOnClick} isExpanded={isExpanded} isExpandable={isExpandable}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img src={companyLogoPath} height={45} alt={`${companyName} logo`}/>
          <div style={{paddingLeft: '20px'}}>
            <h1>{positionTitle}</h1>
            <a href={companyLink} target="_blank"><h2>@ {companyName}</h2></a>
          </div>
        </div>
        <DropdownContainer isExpanded={isExpanded} isExpandable={isExpandable}>
          <img src={"drop-down.png"} width={20} alt={"dropdown arrow"}/>
        </DropdownContainer>
      </StyledCardHeader>
      <StyledCardContent isExpanded={isExpanded}>
        <StyledDateSection>
          ({ startDate } - { endDate })
        </StyledDateSection>
        <ul>
          {experience?.map((exp) => (<li key={`${exp}`}>{exp}</li>))}
        </ul>
        <StyledSkillsSection>
          {skills?.map((skill, index) => (`${index === 0 ? '' : ' • '}${skill}`))}
        </StyledSkillsSection>
      </StyledCardContent>
    </StyledCard>
}

export default ExperienceCard;