import styled from "styled-components"
import Logo from "../assets/logoenergy.png"

const Main = styled.div`
background-color:#40865c;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
img{
    max-width:  340px;
}
`

const Loading = () => {
    return(
      <Main>
        <img src={Logo}/>
      </Main>
    )
  }
  
  export default Loading
  