import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  background-color: #40865c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
  
  .logo {
    width: 50px;
    height: 50px;
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    
    &::before {
      content: "⚡";
      color: white;
      font-size: 20px;
    }
  }
  
  h1 {
    color: white;
    font-size: 24px;
    font-weight: 300;
    margin: 0 0 8px 0;
    letter-spacing: 2px;
  }
  
  p {
    color: #d9d9d9;
    font-size: 14px;
    margin: 0;
  }
`;

const RegisterForm = styled.form`
  background-color: white;
  border-radius: 16px;
  padding: 30px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  color: #2d5a3d;
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 25px 0;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-bottom: 18px;
  
  label {
    display: block;
    color: #2d5a3d;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
  }
  
  input, select {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.2s;
    box-sizing: border-box;
    
    &:focus {
      outline: none;
      border-color: #40865c;
    }
    
    &::placeholder {
      color: #999;
    }
  }
`;

const UserTypeSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
`;

const UserTypeOption = styled.div`
  padding: 12px;
  border: 2px solid ${props => props.selected ? '#40865c' : '#e0e0e0'};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${props => props.selected ? '#f0f8f4' : 'white'};
  
  &:hover {
    border-color: #40865c;
  }
  
  .title {
    font-weight: 600;
    color: #2d5a3d;
    font-size: 14px;
    margin-bottom: 4px;
  }
  
  .subtitle {
    font-size: 12px;
    color: #666;
  }
`;

const RegisterButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #40865c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 20px;
  
  &:hover {
    background-color: #2d5a3d;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const LinkText = styled.p`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 0;
  
  a {
    color: #40865c;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "buyer"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUserTypeChange = (type) => {
    setFormData({
      ...formData,
      userType: type
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    navigate('/home');
  };

  return (
    <Main>
      <LogoContainer>
        <div className="logo"></div>
        <h1>ENERGYZEN</h1>
        <p>Marketplace de Energia Renovável</p>
      </LogoContainer>

      <RegisterForm onSubmit={handleSubmit}>
        <FormTitle>Criar Conta</FormTitle>
        
        <InputGroup>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <label>Tipo de Usuário</label>
          <UserTypeSelector>
            <UserTypeOption 
              selected={formData.userType === 'buyer'}
              onClick={() => handleUserTypeChange('buyer')}
            >
              <div className="title">Comprador</div>
              <div className="subtitle">Comprar energia</div>
            </UserTypeOption>
            <UserTypeOption 
              selected={formData.userType === 'seller'}
              onClick={() => handleUserTypeChange('seller')}
            >
              <div className="title">Vendedor</div>
              <div className="subtitle">Vender energia</div>
            </UserTypeOption>
          </UserTypeSelector>
        </InputGroup>

        <InputGroup>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Mínimo 6 caracteres"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <RegisterButton type="submit">
          Criar Conta
        </RegisterButton>

        <LinkText>
          Já tem uma conta? <a onClick={() => navigate('/login')}>Entrar</a>
        </LinkText>
      </RegisterForm>
    </Main>
  );
};

export default Register; 