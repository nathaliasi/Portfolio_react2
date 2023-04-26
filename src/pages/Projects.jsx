import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../contants/contants';
import '../styles/pages/projects.scss';

const Projects = () => {
  return (
    <section className='project-container'>
      <Link className='button3' to={'/'}>Home</Link>  
      <h1>Projetos</h1>
      <div className='container-cards'>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <div className='cards' key={id}>
          <img src={image} />
          <span className='span'></span>
          <div className='cards-text'>
            <h4>{title}</h4>
            <p>{description}</p>
              {tags.map((tag, i)=>(
                <p className='tags cards-link' key={tag}>{tag}</p>
              ))}
              </div>
              <span className='span'></span>
              <div className='visit'>
                <div className='cards-link'>
                  <a href={source} target='blank'>código</a>
                </div>
                <div className='cards-link'>
                  <a href={visit} target='blank'>Site</a>
                </div>
          </div>
        </div>
       ))}
      </div>
    </section>
  )
}

export default Projects
