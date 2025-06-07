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
  margin-bottom: 40px;
  
  .logo {
    width: 60px;
    height: 60px;
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    
    &::before {
      content: "⚡";
      color: white;
      font-size: 24px;
    }
  }
  
  h1 {
    color: white;
    font-size: 28px;
    font-weight: 300;
    margin: 0 0 10px 0;
    letter-spacing: 2px;
  }
  
  p {
    color: #d9d9d9;
    font-size: 16px;
    margin: 0;
  }
`;

const LoginForm = styled.form`
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
  margin: 0 0 30px 0;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    color: #2d5a3d;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  
  input {
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

const LoginButton = styled.button`
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

const DemoButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #17a2b8;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 20px;
  
  &:hover {
    background-color: #138496;
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

const DemoHint = styled.div`
  background-color: #e7f3ff;
  border: 1px solid #b3d9ff;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 20px;
  font-size: 12px;
  color: #0066cc;
  text-align: center;
  
  strong {
    color: #004499;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.email === "demo" && formData.password === "demo") {
      localStorage.setItem('userType', 'demo');
      localStorage.setItem('userName', 'Carlos Eduardo Silva');
      localStorage.setItem('userEmail', 'carlos.silva@email.com');
      localStorage.setItem('userPhone', '(11) 98765-4321');
      localStorage.setItem('userAddress', 'Rua das Palmeiras, 123 - São Paulo, SP');
      localStorage.setItem('userEnergy', '1250');
      localStorage.setItem('userSavings', '2840');
      navigate('/home');
    } else {
      localStorage.setItem('userType', 'user');
      localStorage.setItem('userName', 'José');
      navigate('/home');
    }
  };

  const handleDemoLogin = () => {
    localStorage.setItem('userType', 'demo');
    localStorage.setItem('userName', 'Carlos Eduardo Silva');
    localStorage.setItem('userEmail', 'carlos.silva@email.com');
    localStorage.setItem('userPhone', '(11) 98765-4321');
    localStorage.setItem('userAddress', 'Rua das Palmeiras, 123 - São Paulo, SP');
    localStorage.setItem('userEnergy', '1250');
    localStorage.setItem('userSavings', '2840');
    navigate('/home');
  };

  return (
    <Main>
      <LogoContainer>
        <div className="logo"></div>
        <h1>ENERGYZEN</h1>
        <p>Marketplace de Energia Renovável</p>
      </LogoContainer>

      <LoginForm onSubmit={handleSubmit}>
        <FormTitle>Entrar</FormTitle>
        
        <DemoHint>
          <strong>Demo:</strong> Clique no botão azul para entrar com dados preenchidos
        </DemoHint>
        
        <DemoButton type="button" onClick={handleDemoLogin}>
          🎯 Entrar como Demo (Carlos Silva)
        </DemoButton>
        
        <InputGroup>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Sua senha"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <LoginButton type="submit">
          Entrar
        </LoginButton>

        <LinkText>
          Não tem uma conta? <a onClick={() => navigate('/register')}>Cadastre-se</a>
        </LinkText>
      </LoginForm>
    </Main>
  );
};

export default Login; 