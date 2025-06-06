import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoListCircleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

const MenuBar = styled.nav`
  background-color: #40865c;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: ${props => props.active ? '#ffffff' : '#d9d9d9'};
  transition: color 0.2s;
  
  &:hover {
    color: #ffffff;
  }
  
  svg {
    font-size: 20px;
  }
  
  p {
    font-size: 12px;
    margin: 0;
  }
`;

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/home', icon: IoHomeSharp, label: 'Início' },
    { path: '/search', icon: IoSearchOutline, label: 'Busca' },
    { path: '/orders', icon: IoListCircleOutline, label: 'Pedidos' },
    { path: '/profile', icon: IoPersonOutline, label: 'Perfil' }
  ];

  return (
    <MenuBar>
      {navItems.map(({ path, icon: Icon, label }) => (
        <NavItem
          key={path}
          active={location.pathname === path}
          onClick={() => navigate(path)}
        >
          <Icon />
          <p>{label}</p>
        </NavItem>
      ))}
    </MenuBar>
  );
};

export default Navigation; 