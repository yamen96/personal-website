import React from 'react';
import { StyledCard, StyledSkillsSection } from './styles';

function ProjectCard ({projectTitle, projectDescription, githubLink, skills}) {
  return <StyledCard>
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