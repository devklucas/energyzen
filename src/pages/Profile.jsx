import { useEffect, useState } from "react";
import styled from 'styled-components'
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { IoPersonCircleOutline, IoChatbubbleOutline, IoNotificationsOutline, IoTicketOutline, IoWalletOutline, IoLogOutOutline, IoStatsChartOutline, IoSettingsOutline } from "react-icons/io5";

const Main = styled.div`
  background-color: #40865c;
  min-height: 100vh;
  padding: 20px;
  padding-bottom: 80px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #2d5a3d;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      font-size: 30px;
      color: white;
    }
  }
  
  .user-info {
    flex: 1;
    
    .greeting {
      color: white;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 4px;
    }
    
    .email {
      color: #d9d9d9;
      font-size: 14px;
    }
  }
`;

const UserCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  
  .user-details {
    margin-bottom: 15px;
    
    .detail-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      
      .label {
        color: #666;
        font-size: 14px;
      }
      
      .value {
        color: #2d5a3d;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
`;

const SellerCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  text-align: center;
  
  h2 {
    margin: 0 0 10px 0;
    font-size: 18px;
    color: #2d5a3d;
    font-weight: 600;
  }
  
  p {
    margin: 0;
    color: #666;
    font-size: 14px;
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: #2d5a3d;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      font-size: 20px;
      color: white;
    }
  }
  
  .content {
    flex: 1;
    
    .label {
      color: white;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 2px;
    }
    
    .subtitle {
      color: #d9d9d9;
      font-size: 12px;
    }
  }
  
  .badge {
    background-color: #ff4757;
    color: white;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 12px;
    font-weight: 600;
  }
`;

const LogoutButton = styled(MenuItem)`
  background-color: rgba(220, 53, 69, 0.1);
  border: 1px solid rgba(220, 53, 69, 0.3);
  margin-top: 20px;
  
  &:hover {
    background-color: rgba(220, 53, 69, 0.2);
  }
  
  .icon {
    background-color: #dc3545;
  }
  
  .label {
    color: #dc3545;
  }
`;

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: 'José',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    const userType = localStorage.getItem('userType');
    if (userType === 'demo') {
      setUserData({
        name: localStorage.getItem('userName') || 'Carlos Eduardo Silva',
        email: localStorage.getItem('userEmail') || 'carlos.silva@email.com',
        phone: localStorage.getItem('userPhone') || '(11) 98765-4321',
        address: localStorage.getItem('userAddress') || 'Rua das Palmeiras, 123 - São Paulo, SP'
      });
    } else {
      setUserData({
        name: localStorage.getItem('userName') || 'José',
        email: 'jose@email.com',
        phone: '(11) 99999-9999',
        address: 'Endereço do usuário'
      });
    }
  }, []);

  const menuItems = [
    { 
      icon: IoChatbubbleOutline, 
      label: "Chats", 
      subtitle: "Conversas com vendedores",
      badge: userData.name === 'Carlos Eduardo Silva' ? "3" : null
    },
    { 
      icon: IoNotificationsOutline, 
      label: "Notificações", 
      subtitle: "Alertas e atualizações",
      badge: userData.name === 'Carlos Eduardo Silva' ? "5" : null
    },
    { 
      icon: IoStatsChartOutline, 
      label: "Estatísticas", 
      subtitle: "Consumo e economia"
    },
    { 
      icon: IoTicketOutline, 
      label: "Cupons", 
      subtitle: "Descontos disponíveis",
      badge: userData.name === 'Carlos Eduardo Silva' ? "2" : null
    },
    { 
      icon: IoWalletOutline, 
      label: "Carteira", 
      subtitle: "Métodos de pagamento"
    },
    { 
      icon: IoSettingsOutline, 
      label: "Configurações", 
      subtitle: "Preferências do app"
    }
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <Main>
      <Header>
        <div className="avatar">
          <IoPersonCircleOutline />
        </div>
        <div className="user-info">
          <div className="greeting">Bem vindo, {userData.name.split(' ')[0]}</div>
          <div className="email">{userData.email}</div>
        </div>
      </Header>

      {userData.name === 'Carlos Eduardo Silva' && (
        <UserCard>
          <div className="user-details">
            <div className="detail-row">
              <span className="label">Telefone:</span>
              <span className="value">{userData.phone}</span>
            </div>
            <div className="detail-row">
              <span className="label">Endereço:</span>
              <span className="value">{userData.address}</span>
            </div>
            <div className="detail-row">
              <span className="label">Membro desde:</span>
              <span className="value">Janeiro 2024</span>
            </div>
            <div className="detail-row">
              <span className="label">Status:</span>
              <span className="value">Cliente Premium</span>
            </div>
          </div>
        </UserCard>
      )}

      <SellerCard>
        <h2>SEJA UM VENDEDOR?</h2>
        <p>Cadastre-se como vendedor e comece a vender energia</p>
      </SellerCard>

      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <div className="icon">
              <item.icon />
            </div>
            <div className="content">
              <div className="label">{item.label}</div>
              <div className="subtitle">{item.subtitle}</div>
            </div>
            {item.badge && <div className="badge">{item.badge}</div>}
          </MenuItem>
        ))}
        
        <LogoutButton onClick={handleLogout}>
          <div className="icon">
            <IoLogOutOutline />
          </div>
          <div className="content">
            <div className="label">Sair</div>
          </div>
        </LogoutButton>
      </MenuList>

      <Navigation />
    </Main>
  );
};

export default Profile