import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import Logo from "../assets/logoenergy.png"

const Main = styled.div`
background-color:#40865c;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
img{
    max-width:  340px;
}
`

const LogoContainer = styled.div`
  border: 2px solid white;
  border-radius: 8px;
  padding: 20px 40px;
  
  h1 {
    color: white;
    font-size: 32px;
    font-weight: 300;
    margin: 0;
    letter-spacing: 2px;
  }
`;

const PowerIcon = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  &::before {
    content: "⚡";
    color: white;
    font-size: 20px;
  }
`;

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Main>
      <PowerIcon />
      <LogoContainer>
        <h1>ENERGYZEN</h1>
      </LogoContainer>
    </Main>
  );
}

export default Loading
  