import styled from "styled-components";
import imageBg from "../../images/image-background-2.jpg";

export const BenefitsSection = styled.section`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("${imageBg}") no-repeat center center/cover;
  height: 100vh;
  background-attachment: fixed;

  @media (max-width: 1280px) {
    height: 110vh;
  }

  @media (max-width: 768px) {
    height: 155vh;
  }

  @media (max-width: 540px) {
    height: 300vh;
  }
`;

export const BenefitsContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const BenefitsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
  padding: 60px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 540px) {
    grid-template-columns: auto;
  }
`;

export const BenefitsCard = styled.div`
  background-color: white;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 40px;
  width: 400px;
  height: 400px;
  transition: all 0.3s;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 320px;
  }

  @media (max-width: 768px) {
    width: 350px;
  }

  @media (max-width: 360px) {
    width: 340px;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 2px 4px 12px black;
  }

  h3 {
    font-size: 1.5rem;
    text-align: center;
    margin-left: 30px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.2;
    margin: 20px 0 25px;
  }

  button {
    border: none;
    text-transform: uppercase;
    border-bottom: 2px solid #346473;
    font-size: 1.3rem;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      letter-spacing: 5px;
      color: #346473;
    }
  }
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 5rem;
    color: #346473;
  }
`;
