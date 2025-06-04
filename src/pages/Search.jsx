import styled from 'styled-components'
import { IoHomeSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoListCircleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

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
const NavBar= styled.div``
const Search = () => {
    return(
        <Main>
            <NavBar>
                <input placeholder="Busque por vendedor"></input>
                <button>Buscar</button>
            </NavBar>
            
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

export default Search