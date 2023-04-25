import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/projectsContainer.scss';

const ProjectsContainer = () => {
  return (
    <section className='projects-container'> 
            <h2>Projetos  <span className='span'> </span> </h2>
            <p>Projetos pessoais, projetos da faculdade e etc...</p>
           <Link className='button2' to={'/projects'}>Projects</Link>  
    </section>
  )
}

export default ProjectsContainer
