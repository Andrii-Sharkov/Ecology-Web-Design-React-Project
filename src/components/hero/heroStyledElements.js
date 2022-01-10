import styled from "styled-components";
import BackgroundImage from "../../images/image-background-1.jpg";

export const HeroSection = styled.section`
  background: url("${BackgroundImage}") no-repeat center center/cover;
  height: 85vh;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  height: 500px;
  width: 750px;
  padding: 35px 30px;
  margin: 0 auto;
  transform: translateY(150px);
  background: rgba(0, 0, 5, 0.5);
  animation: HeroAnimated 0.5s;

  @media (max-width: 540px) {
    width: 500px;
    height: 450px;
  }

  @media (max-width: 414px) {
    width: 400px;
    height: 350px;
  }

  @media (max-width: 375px) {
    width: 350px;
    height: 300px;
  }

  @keyframes HeroAnimated {
    from {
      transform: translateY(-500px);
    }
    to {
      transform: translateY(150px);
    }
  }
`;

export const HeroSmallText = styled.p`
  color: white;
  font-size: 1.4rem;

  @media (max-width: 414px) {
    font-size: 1.2rem;
  }

  @media (max-width: 375px) {
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: white;
  letter-spacing: 3px;

  @media (max-width: 540px) {
    font-size: 3rem;
  }

  @media (max-width: 414px) {
    font-size: 2.5rem;
  }

  @media (max-width: 375px) {
    font-size: 2rem;
  }
`;

export const HeroButton = styled.button`
  font-size: 0.9rem;
  text-transform: uppercase;
  background-color: #74ae2d;
  border-radius: 5px;
  border: none;
  padding: 15px 10px;
  width: 180px;
  color: white;
  cursor: pointer;
  transform: all 0.5s;

  &:hover {
    background-color: #39ce57;
  }
`;
