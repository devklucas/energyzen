import styled from 'styled-components'
import { IoHomeSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoListCircleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import profile3 from "../assets/50.webp"

const Main = styled.div`
background-color:#40865c;
height: 100vh;
display: flex;
flex-direction:column;
justify-content: space-between  ;
align-items: center;
color: #d9d9d9;
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
const Card = styled.div`
background-color: #d9d9d9;
padding: 30px;
width: 351px;
border-radius: 8px;
color: black;
display: flex;
gap:20px;
section{
    display: flex;
}
img{
    width:50px;
    height: 50px;
    border-radius: 360%;
}
`
const SecTitle = styled.section`
height: 50px;
background-color:#358e5a; 
`
const Orders = () => {
    return (
        <Main>
            <SecTitle>
            <h2>Meus pedidos</h2>
            </SecTitle>
             
                <span>Mais pedidos por você</span>


                <p>Sex 09 de Julho 2024 </p>
            <Card>
                <div>

                    <img src={profile3} />
                </div>
                <div>
                    <h2>Jõao da silva </h2>
                    <section>
                        <IoStar />
                        <p>5,0</p>
                    </section>
                    <span>900 kWs disponíveis</span>
                </div>
            </Card>
                <p>Sex 09 de Julho 2024 </p>
            <Card>
                <div>

                    <img src={profile3} />
                </div>
                <div>
                    <h2>Jõao da silva </h2>
                    <section>
                        <IoStar />
                        <p>5,0</p>
                    </section>
                    <span>900 kWs disponíveis</span>
                </div>
            </Card>

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

export default Orders