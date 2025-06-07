import { useEffect, useState } from "react";
import styled from 'styled-components'
import Navigation from "../components/Navigation";
import { IoHomeSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoListCircleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import profile1 from "../assets/50.webp"
import profile2 from "../assets/51.webp"
import profile3 from "../assets/52.webp"

const Main = styled.div`
background-color:#40865c;
min-height: 100vh;
padding-bottom: 80px;
`
const Header = styled.div`
background-color: #358e5a;
padding: 20px;
text-align: center;

h1 {
    color: white;
    margin: 0;
    font-size: 20px;
    font-weight: 500;
}
`
const Content = styled.div`
padding: 20px;
`
const SectionTitle = styled.h2`
color: white;
font-size: 16px;
margin: 20px 0 15px 0;
font-weight: 400;
`
const PowerInfo = styled.div`
background-color: #2d5a3d;
border-radius: 8px;
padding: 15px;
margin-bottom: 20px;

.power-amount {
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
}

.power-label {
    color: #d9d9d9;
    font-size: 14px;
}
`
const OrdersGrid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 15px;
margin-bottom: 30px;
`
const OrderCard = styled.div`
background-color: #d9d9d9;
border-radius: 8px;
height: 120px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #666;
cursor: pointer;
transition: background-color 0.2s;
padding: 15px;
text-align: center;

&:hover {
    background-color: #c9c9c9;
}

.order-title {
    font-weight: 600;
    margin-bottom: 8px;
    color: #2d5a3d;
}

.order-details {
    font-size: 12px;
    line-height: 1.4;
}
`
const DateLabel = styled.div`
color: white;
font-size: 14px;
margin: 15px 0 10px 0;
`
const OrderHistoryCard = styled.div`
background-color: #d9d9d9;
padding: 15px;
border-radius: 8px;
color: black;
display: flex;
gap: 15px;
margin-bottom: 15px;

img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}
`
const OrderInfo = styled.div`
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

.order-details {
    font-size: 14px;
    color: #666;
}

.price {
    font-size: 16px;
    font-weight: bold;
    color: #2d5a3d;
    margin-top: 5px;
}
`
const StatusBadge = styled.div`
background-color: ${props => {
    switch(props.status) {
        case 'completed': return '#28a745';
        case 'pending': return '#ffc107';
        case 'active': return '#17a2b8';
        default: return '#6c757d';
    }
}};
color: white;
padding: 4px 8px;
border-radius: 12px;
font-size: 12px;
font-weight: 600;
align-self: flex-start;
`
const Orders = () => {
    const [userData, setUserData] = useState({
        name: 'José',
        energy: '40'
    });

    useEffect(() => {
        const userType = localStorage.getItem('userType');
        if (userType === 'demo') {
            setUserData({
                name: localStorage.getItem('userName') || 'Carlos Eduardo Silva',
                energy: localStorage.getItem('userEnergy') || '1250'
            });
        }
    }, []);

    const quickOrders = userData.name === 'Carlos Eduardo Silva' ? [
        { title: "Energia Solar", details: "200 kWh\nR$ 84,00" },
        { title: "Energia Eólica", details: "150 kWh\nR$ 63,00" },
        { title: "Energia Hidro", details: "100 kWh\nR$ 45,00" },
        { title: "Mix Renovável", details: "300 kWh\nR$ 135,00" }
    ] : [
        { title: "Pedido 1", details: "Sem dados" },
        { title: "Pedido 2", details: "Sem dados" },
        { title: "Pedido 3", details: "Sem dados" },
        { title: "Pedido 4", details: "Sem dados" }
    ];

    const orders = userData.name === 'Carlos Eduardo Silva' ? [
        {
            id: 1,
            seller: "José Márcio",
            rating: 5.0,
            power: "200kW entregues",
            price: "R$ 84,00",
            status: "completed",
            image: profile1,
            date: "Seg 02 de Dezembro 2024"
        },
        {
            id: 2,
            seller: "Maria de Fátima",
            rating: 4.9,
            power: "150kW em andamento",
            price: "R$ 63,00",
            status: "active",
            image: profile2,
            date: "Sex 29 de Novembro 2024"
        },
        {
            id: 3,
            seller: "João da Silva",
            rating: 5.0,
            power: "300kW solicitados",
            price: "R$ 135,00",
            status: "pending",
            image: profile3,
            date: "Qua 27 de Novembro 2024"
        }
    ] : [
        {
            id: 1,
            seller: "Nome do vendedor",
            rating: 5.0,
            power: "200kW solicitados",
            price: "R$ 200,00",
            status: "pending",
            image: profile1,
            date: "Sex 09 de Julho 2024"
        }
    ];

    return (
        <Main>
            <Header>
                <h1>Meus pedidos</h1>
            </Header>

            <Content>
                <SectionTitle>Mais pedidos por você</SectionTitle>
                
                <PowerInfo>
                    <div className="power-amount">{userData.energy} kWh</div>
                    <div className="power-label">
                        {userData.name === 'Carlos Eduardo Silva' ? 'Total consumido este mês' : 'Energia disponível'}
                    </div>
                </PowerInfo>

                <OrdersGrid>
                    {quickOrders.map((order, index) => (
                        <OrderCard key={index}>
                            <div className="order-title">{order.title}</div>
                            <div className="order-details">{order.details}</div>
                        </OrderCard>
                    ))}
                </OrdersGrid>

                <SectionTitle>Histórico</SectionTitle>
                
                {orders.map(order => (
                    <div key={order.id}>
                        <DateLabel>{order.date}</DateLabel>
                        <OrderHistoryCard>
                            <img src={order.image} alt={order.seller} />
                            <OrderInfo>
                                <h3>{order.seller}</h3>
                                <div className="rating">
                                    <IoStar />
                                    <span>{order.rating}</span>
                                </div>
                                <div className="order-details">{order.power}</div>
                                <div className="price">{order.price}</div>
                            </OrderInfo>
                            <StatusBadge status={order.status}>
                                {order.status === 'completed' ? 'Concluído' : 
                                 order.status === 'active' ? 'Ativo' : 'Pendente'}
                            </StatusBadge>
                        </OrderHistoryCard>
                    </div>
                ))}
            </Content>

            <Navigation />
        </Main>
    )
}

export default Orders