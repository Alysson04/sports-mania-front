import { Container } from './styles.js'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Header/Sidebar/'
import React, { useState } from 'react';
import "./img.css";
import img1 from '../../assets/Design_sem_nome__8_-removebg-preview (1).png'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      {/* Use a variável img1 diretamente */}
      

      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
   
      <div className='sistemaEstoque'><h2>SportSMania</h2></div>
      
    </Container>
  )
}

export default Header
