
import { Container } from './styles.js'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Header/Sidebar/'
import React, { useState } from 'react';

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
  
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}

export default Header