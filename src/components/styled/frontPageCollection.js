import styled from "styled-components";
import {
  mainColor,
  secondaryColor,
  highlightColor,
  auxColor
} from "../helpers/colors";

export const Header = styled.header`
  width: 100%;
  background-color: ${mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 6px solid ${secondaryColor};
`;

export const HeaderLogo = styled.img`
  padding: 1rem;
  max-width: 40%;

  @media (min-width: 768px) {
    max-width: 80%;
  }
`;

export const HeaderLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  a {
    font-size: 0.9rem;
    margin: 0.5rem 0;
    padding: 0 0.5rem;

    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
  }
  a:last-of-type {
    border: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    a {
      margin: 1rem 0;
      font-size: 1.3rem;
      padding: 0 2rem;
      border-right: 2px solid ${secondaryColor};
    }
  }
`;

export const HeaderLink = styled.a`
  color: ${mainColor};
  font-weight: bold;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1300px;
`;

export const SlimContentSection = styled.section`
  max-width: 900px;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const OrangeHeader = styled.h2`
  text-align: center;
  color: ${mainColor};
  font-size: 2rem;
  font-weight: 500;
`;

export const GreyText = styled.p`
  color: ${auxColor};
  font-size: 1.4rem;
  padding: 0 1.5rem;
`;

export const Divider = styled.hr`
  width: 80%;
  color: ${highlightColor};
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const PageContainer = styled.ul`
  display: flex;
  list-style: none;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
  max-width: 1300px;
  padding: 0;
`;

export const PagePea = styled.li`
  color: ${props => (props.selected ? mainColor : highlightColor)};
  margin: 0.25rem;
`;

export const LargePea = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  z-index: 10;
  background: white no-repeat center;
  border: 2px solid ${props => (props.isActive ? mainColor : highlightColor)};
  border-radius: 5rem;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${props => (props.isActive ? mainColor : highlightColor)};
  box-shadow: 0 0 16px -1px ${props => (props.isActive ? mainColor : highlightColor)};
  cursor: pointer;
  font-weight: 300;
  margin: 0 0.5rem;
`;

export const CategoryContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 90%;
  max-width: 1300px;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

export const CategoryItem = styled.li`
  color: ${props => (props.active ? "white" : secondaryColor)};
  background-color: ${props => (props.active ? mainColor : "none")};
  border-radius: 0.25rem;
  text-transform: uppercase;
  font-size: 1.25rem;
  padding: 0.5rem;
`;

export const CentralPeaContainer = styled.div`
  display: flex;
`;
