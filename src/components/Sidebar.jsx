import React from 'react';
import '../styles/components/sidebar.scss';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './informationContainer';
import ButtonDownload from './ButtonDownload';

import Avatar from '../img/eu2.png';

const sidebar = () => {
  return (
    <aside id='sidebar'>
      <img id='profile' src={Avatar} alt='Nathália Sardou imagem'/>
      <p className='title'>Desenvolvedora Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <ButtonDownload/>
    </aside>
  )
}

export default sidebar
