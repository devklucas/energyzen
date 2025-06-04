import styled from "styled-components"
import { IoHomeSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoListCircleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import banner from '../assets/app.png'
import profile1 from '../assets/50.webp'
import profile2 from '../assets/51.webp'
import profile3 from '../assets/52.webp'
import profile4 from '../assets/53.jpeg'
import { IoStar } from "react-icons/io5";


const Main = styled.div`
background-color:#40865c;
height: 100vh;
display: flex;
flex-direction:column;
justify-content: space-between  ;
align-items: center;
`
const MenuBar = styled.aside`
height: 50px;
color:#d9d9d9;
display: flex;
gap:20px;
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
}
`

const ImageBanner = styled.img`
width: 351px;
height:169x;
border-radius: 8px;
`
const DivBar = styled.div`
display: flex;
color:white;
gap: 20px;
img{
    width:64px;
    height:64px;
    border-radius: 360%;
}
section{
    display: flex;
}
`
const Home = () => {
    return (
        <Main>
            <span>Rua sem saída, 15 <IoChevronDown /></span>
            <IoNotificationsOutline />
            <p>Olá usuário</p>
            <ImageBanner src={banner} alt='banner'/>
            <DivBar>
                <div>
                <img src={profile1}/>
                </div>
                <div>
                <h2>Jõao da silva </h2>
                <section>
                <IoStar/>
                <p>5,0</p>
                </section>
                
                <span>900 kWs disponíveis</span>
                </div>
            </DivBar>
            <DivBar>
                <div>
                <img src={profile2}/>
                </div>
                <div>
                <h2>Jõao da silva </h2>
                <section>
                <IoStar/>
                <p>5,0</p>
                </section>
                
                <span>900 kWs disponíveis</span>
                </div>
            </DivBar>
            <DivBar>
                <div>
                <img src={profile3}/>
                </div>
                <div>
                <h2>Jõao da silva </h2>
                <section>
                <IoStar/>
                <p>5,0</p>
                </section>
                
                <span>900 kWs disponíveis</span>
                </div>
            </DivBar>
            <DivBar>
                <div>
                <img src={profile4}/>
                </div>
                <div>
                <h2>Jõao da silva </h2>
                <section>
                <IoStar/>
                <p>5,0</p>
                </section>
                
                <span>900 kWs disponíveis</span>
                </div>
            </DivBar>
            <MenuBar>
                <div>
                    <IoHomeSharp />
                    <p>Ínicio</p>
                </div>

                <div>

                    <IoSearchOutline />
                    <p>Busca</p>
                </div>

                <div>
                    <IoListCircleOutline />
                    <p>Pedidos</p>
                </div>
                <div>
                    <IoPersonOutline />
                    <p>Perfil</p>
                </div>

            </MenuBar>
        </Main>
    )
}

export default Home

/* <IoHomeSharp />
<IoListCircleSharp />
<IoPerson />
<IoSearchSharp /> */