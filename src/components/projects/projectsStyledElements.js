import styled from "styled-components";

export const ProjectsSection = styled.section`
  background-color: white;
  height: 100vh;

  @media (max-width: 1280px) {
    height: 165vh;
  }

  @media (max-width: 540px) {
    height: 285vh;
  }
`;

export const ProjectsContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;

  @media (max-width: 540px) {
    padding: 50px 0;
  }

  h3 {
    font-size: 3rem;

    @media (max-width: 375px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.3;
    width: 700px;
    text-align: center;

    @media (max-width: 540px) {
      width: 450px;
    }

    @media (max-width: 414px) {
      width: 400px;
    }

    @media (max-width: 375px) {
      width: 340px;
      font-size: 1.1rem;
      line-height: 1.2;
    }
  }
`;

export const OurProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  margin-top: 50px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: auto;
  }
`;

export const CardProject = styled.div`
  width: 330px;
  height: 500px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      transform: scale(1.06);
    }
  }
`;

export const ProjectTitle = styled.div`
  position: absolute;
  top: 45%;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.4rem;
    background-color: white;
    color: black;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-align: center;
    width: 80%;
    padding: 15px 0;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      color: white;
      border: 3px solid white;
      background: transparent;
    }
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  border: 1px solid black;
  background-color: white;
  font-size: 1rem;
  letter-spacing: 2px;
  padding: 10px 20px;
  text-transform: uppercase;
  margin-top: 50px;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
    width: 340px;
  }
`;
