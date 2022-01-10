import styled from "styled-components";
import { FaBars as Bar } from "react-icons/fa";
export const Heading = styled.header`
  background-color: black;
  height: 8vh;
`;

export const HeaderContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.a`
  font-size: 2rem;
  color: white;
  letter-spacing: 3px;
`;

export const MobileMenu = styled(Bar)`
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;
