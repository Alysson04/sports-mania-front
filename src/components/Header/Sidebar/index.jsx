
import { Link } from 'react-router-dom';
import { Container, Content } from './styles.js'
import { 
  FaTimes, 
  FaChartBar,
  FaUsers,

} from 'react-icons/fa'

import { BsBoxSeam } from "react-icons/bs";
import { BsBoxes } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { LuFileBox } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
      <Link to="/produtos">
        <SidebarItem Icon={BsBoxSeam} Text="Produtos" />
      </Link>
      <Link to="/fornecedores">
        <SidebarItem Icon={BsPersonWorkspace} Text="Funcionários" />
      </Link>
      <Link to="/entradas">
        <SidebarItem Icon={FaArrowRight} Text="Entradas" />
      </Link>
      <Link to="/saidas">
        <SidebarItem Icon={FaArrowLeft} Text="Vendas" />
      </Link>
      <Link to="/clientes">
        <SidebarItem Icon={FaUsers} Text="Clientes" />
      </Link>
      <Link to="/dashboard">
        <SidebarItem Icon={FaChartBar} Text="Dashboard" />
      </Link>
      </Content>
    </Container>
  )
}

export default Sidebar