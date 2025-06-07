import styled from 'styled-components'
import { IoHomeSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoListCircleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

import { IoStar } from "react-icons/io5";
import Navigation from "../components/Navigation";

const Main = styled.div`
  background-color: #40865c;
  min-height: 100vh;
  padding: 20px;
  padding-bottom: 80px;
`;

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

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  
  input {
    flex: 1;
    padding: 12px 16px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    background-color: white;
    
    &::placeholder {
      color: #999;
    }
  }
  
  button {
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    background-color: #2d5a3d;
    color: white;
    font-size: 16px;
    cursor: pointer;
    
    &:hover {
      background-color: #1f4129;
    }
  }
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 500;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 30px;
`;

const CategoryCard = styled.div`
  background-color: #d9d9d9;
  border-radius: 8px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #c9c9c9;
  }
`;

const FeaturedSection = styled.div`
  background-color: #d9d9d9;
  border-radius: 8px;
  height: 200px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
`;

const RecommendationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const RecommendationCard = styled.div`
  background-color: #d9d9d9;
  border-radius: 8px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #c9c9c9;
  }
`;

const Search = () => {
  const categories = [
    "Solar", "Eólica", "Hidrelétrica", 
    "Biomassa", "Nuclear", "Geotérmica"
  ];

  return (
    <Main>
      <SearchContainer>
        <input placeholder="Busque por vendedor" />
        <button>Buscar</button>
      </SearchContainer>

      <SectionTitle>Categorias</SectionTitle>
      <CategoriesGrid>
        {categories.map((category, index) => (
          <CategoryCard key={index}>
            {category}
          </CategoryCard>
        ))}
      </CategoriesGrid>

      <FeaturedSection>
        Seção em Destaque
      </FeaturedSection>

      <RecommendationsGrid>
        <RecommendationCard>
          Recomendação 1
        </RecommendationCard>
        <RecommendationCard>
          Recomendação 2
        </RecommendationCard>
      </RecommendationsGrid>

      <Navigation />
    </Main>
  );
};

export default Search