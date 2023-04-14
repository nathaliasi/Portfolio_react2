import{AiFillPhone,AiOutlineMail, AiTwotoneEnvironment} from 'react-icons/ai';


import '../styles/components/informationcontainer.scss'

import React from 'react'

const InformationContainer = () => {
  return (
    <section id='information'>
        <div className='info-card'>
            <AiFillPhone id='phone-icon' />
            <h3>Celular</h3>
            <div>
                <a    href='https://api.whatsapp.com/send?1=pt_BR&phone=5522998982554' target={'_blank'} id='phone'>(22)99898-2554</a>
                
            </div>
        </div>
        <div className='info-card'>
            <AiOutlineMail id='email-icon' />
            <h3>E-mail</h3>
            <div>
                <p>nathaliatrab@outlook.com</p>
            </div>
        </div>
        <div className='info-card'>
            <AiTwotoneEnvironment id='location-icon' />
            <div>
                <h3>Nova Friburgo RJ</h3>
            </div>
        </div>

    </section>
  )
}

export default InformationContainer
