import React, { useState } from 'react';
import { Animator } from '../../components/helpers/animationHelper';
import  SectionHeader  from '../../components/SectionHeader';
import { SiteSection } from '../../components/SiteSection';
import ProjectCard from '../../components/ProjectCard';
import { projectsList } from './Projects';
import { ProjectGrid } from './styles';
import  Button  from '../../components/Button';
import { motion } from 'framer-motion';

function Projects () {
  const [ showAll, setShowAll ] = useState(false);
  const visibleList = projectsList.slice(0, showAll ? projectsList.length : 4);

  return <SiteSection id={"projects"}>
    <SectionHeader>Projects</SectionHeader>
    <ProjectGrid>
      {visibleList.map((project, index) => (
          <ProjectCard index={index} key={project.projectTitle} showAll={showAll} {...project}/>
        ))}
      </ProjectGrid>
      <motion.div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}
        {...new Animator().shouldAnimateOnView().withDelay(visibleList.length*0.1).withDirection(-2).withDuration(0.5).getProps()}>
        <Button onClick={()=> {setShowAll(!showAll)}}>{showAll ? "Show Less" : "Show More"}</Button>
      </motion.div>

  </SiteSection>
}

export default Projects