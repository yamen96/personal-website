import React from 'react';
import { StyledCard, StyledSkillsSection } from './styles';
import { Animator } from '../helpers/animationHelper';

function ProjectCard ({projectTitle, projectDescription, githubLink, skills, index}) {
  return <StyledCard {...new Animator().shouldAnimateOnView().withDelay(0.5 + index*0.2).withDirection(-2).withDuration(0.5).getProps()}>
    <div>
      <h1>
        {projectTitle}
        {githubLink && <a href={githubLink}>
          <img src={"company-logos/github-142-svgrepo-com.svg"} height={20} alt={"github link"}/>
        </a>}

      </h1>
      <h2>{projectDescription}</h2>
    </div>

    <StyledSkillsSection>
        {skills.map((skill, index) => (`${index === 0 ? '' : ' • '}${skill}`))}
      </StyledSkillsSection>
  </StyledCard>
}

export default ProjectCard;