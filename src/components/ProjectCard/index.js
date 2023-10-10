import React from 'react';
import { StyledCard, StyledSkillsSection } from './styles';
import { Animator } from '../helpers/animationHelper';

function ProjectCard ({projectTitle, projectDescription, githubLink, externalLink, skills, index, showAll}) {
  return <StyledCard {...new Animator().shouldAnimateOnView().withDelay(showAll ? (index-4)*0.1 : index*0.1).withDirection(-2).withDuration(0.5).getProps()}>
    <div>
      <h1>
        {projectTitle}
        <div style={{display: "flex", gap: '10px', alignItems: "center"}}>
          {githubLink && <a href={githubLink} target="_blank">
            <img src={"company-logos/github-142-svgrepo-com.svg"} height={20} alt={"github link"}/>
          </a>}

          {externalLink && <a href={externalLink} target="_blank">
            <img src={"arrow-up-right-from-square-solid.svg"} height={18} alt={"external link"}/>
          </a>}
        </div>

      </h1>
      <h2>{projectDescription}</h2>
    </div>

    <StyledSkillsSection>
        {skills.map((skill, index) => (`${index === 0 ? '' : ' • '}${skill}`))}
      </StyledSkillsSection>
  </StyledCard>
}

export default ProjectCard;