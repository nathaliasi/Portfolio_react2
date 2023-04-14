import React from 'react';
import {FaLinkedinIn, FaGithubAlt} from "react-icons/fa";
import '../styles/components/socialnetworks.scss';

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn/>, href: 'https://www.linkedin.com/in/nath%C3%A1lia-sardou-b7a102179/'},
    {name: "github", icon: <FaGithubAlt/>, href: 'https://github.com/nathaliasi'},

    
];

const SocialNetworks = () => {
  return (
   <section id='social-networks'>
       
    {socialNetworks.map((network) => (
        <a href={network.href}  className='social-btn' id={network.name} key={network.name} target='_blank'>
            {network.icon}
        </a>
       
    )
    )}

   </section>
  )
}



export default SocialNetworks
