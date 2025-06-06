import { useEffect, useState } from "react";
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
import Navigation from "../components/Navigation";

const Main = styled.div`
background-color:#40865c;
min-height: 100vh;
padding-bottom: 80px;
`
const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
color: white;
`

const LocationText = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-size: 14px;
cursor: pointer;
`

const NotificationIcon = styled.div`
font-size: 24px;
cursor: pointer;
position: relative;

&::after {
    content: "";
    position: absolute;
    top: 2px;
    right: 2px;
    width: 8px;
    height: 8px;
    background-color: #ff4757;
    border-radius: 50%;
    display: ${props => props.hasNotification ? 'block' : 'none'};
}
`

const Greeting = styled.div`
padding: 0 20px;
color: white;
font-size: 18px;
margin-bottom: 20px;
`

const UserStats = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 15px;
padding: 0 20px;
margin-bottom: 20px;
`

const StatCard = styled.div`
background-color: rgba(255, 255, 255, 0.1);
border-radius: 12px;
padding: 15px;
text-align: center;

.value {
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
}

.label {
    color: #d9d9d9;
    font-size: 12px;
}
`

const BannerContainer = styled.div`
padding: 0 20px;
margin-bottom: 20px;
`

const ImageBanner = styled.img`
width: 100%;
max-width: 351px;
height: 169px;
border-radius: 8px;
object-fit: cover;
`

const SellersContainer = styled.div`
padding: 0 20px;
display: flex;
flex-direction: column;
gap: 15px;
`

const SellerCard = styled.div`
display: flex;
align-items: center;
gap: 15px;
color: white;
background-color: rgba(255, 255, 255, 0.05);
padding: 15px;
border-radius: 12px;
cursor: pointer;
transition: background-color 0.2s;

&:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
}
`

const SellerInfo = styled.div`
flex: 1;

h3 {
    margin: 0 0 5px 0;
    font-size: 16px;
    font-weight: 500;
}

.rating {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
    
    svg {
        color: #ffd700;
        font-size: 14px;
    }
    
    span {
        font-size: 14px;
    }
}

.availability {
    font-size: 14px;
    color: #d9d9d9;
}
`

const PriceTag = styled.div`
background-color: #2d5a3d;
color: white;
padding: 8px 12px;
border-radius: 8px;
font-size: 14px;
font-weight: 600;
`

const Home = () => {
    const [userData, setUserData] = useState({
        name: 'Usuário',
        address: 'Endereço do comprador, 562',
        energy: '0',
        savings: '0'
    });

    useEffect(() => {
        const userType = localStorage.getItem('userType');
        if (userType === 'demo') {
            setUserData({
                name: localStorage.getItem('userName') || 'Carlos Eduardo Silva',
                address: localStorage.getItem('userAddress') || 'Rua das Palmeiras, 123 - São Paulo, SP',
                energy: localStorage.getItem('userEnergy') || '1250',
                savings: localStorage.getItem('userSavings') || '2840'
            });
        } else {
            setUserData({
                name: localStorage.getItem('userName') || 'José',
                address: 'Endereço do comprador, 562',
                energy: '0',
                savings: '0'
            });
        }
    }, []);

    const sellers = [
        { 
            id: 1, 
            name: "José Márcio", 
            rating: 5.0, 
            power: "400 kW disponíveis", 
            price: "R$ 0,45/kWh",
            image: profile1 
        },
        { 
            id: 2, 
            name: "Maria de Fátima", 
            rating: 4.9, 
            power: "750 kW disponíveis", 
            price: "R$ 0,42/kWh",
            image: profile2 
        },
        { 
            id: 3, 
            name: "Moises Viera", 
            rating: 4.8, 
            power: "580 kW disponíveis", 
            price: "R$ 0,48/kWh",
            image: profile3 
        },
        { 
            id: 4, 
            name: "João da Silva", 
            rating: 5.0, 
            power: "900 kW disponíveis", 
            price: "R$ 0,40/kWh",
            image: profile4 
        }
    ];

    return (
        <Main>
            <Header>
                <LocationText>
                    {userData.address} <IoChevronDown />
                </LocationText>
                <NotificationIcon hasNotification={userData.name === 'Carlos Eduardo Silva'}>
                    <IoNotificationsOutline />
                </NotificationIcon>
            </Header>

            <Greeting>
                Olá, {userData.name.split(' ')[0]}
            </Greeting>

            {userData.name === 'Carlos Eduardo Silva' && (
                <UserStats>
                    <StatCard>
                        <div className="value">{userData.energy} kWh</div>
                        <div className="label">Energia Comprada</div>
                    </StatCard>
                    <StatCard>
                        <div className="value">R$ {userData.savings}</div>
                        <div className="label">Economia Total</div>
                    </StatCard>
                </UserStats>
            )}

            <BannerContainer>
                <ImageBanner src={banner} alt="Banner promocional" />
            </BannerContainer>

            <SellersContainer>
                {sellers.map(seller => (
                    <SellerCard key={seller.id}>
                        <img src={seller.image} alt={seller.name} />
                        <SellerInfo>
                            <h3>{seller.name}</h3>
                            <div className="rating">
                                <IoStar />
                                <span>{seller.rating}</span>
                            </div>
                            <div className="availability">{seller.power}</div>
                        </SellerInfo>
                        <PriceTag>{seller.price}</PriceTag>
                    </SellerCard>
                ))}
            </SellersContainer>

            <Navigation />
        </Main>
    )
}

export default Home

/* <IoHomeSharp />
<IoListCircleSharp />
<IoPerson />
<IoSearchSharp /> */