import React from 'react';
import  SectionHeader  from '../../components/SectionHeader';
import { SiteSection } from '../../components/SiteSection';
import ProjectCard from '../../components/ProjectCard';
import { projectsList } from './Projects';
import { ProjectGrid } from './styles';

function Projects () {
  return <SiteSection id={"projects"}>
    <SectionHeader>Projects</SectionHeader>
    <ProjectGrid>
      {projectsList.map(project => (
          <ProjectCard {...project}/>
        ))}
      </ProjectGrid>
  </SiteSection>
}

export default Projects