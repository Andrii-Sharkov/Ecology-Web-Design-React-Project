import styled from "styled-components";

export const SaveWorldTwoSection = styled.section`
  background-color: white;
  height: 60vh;

  @media (max-width: 540px) {
    height: 80vh;
  }

  @media (max-width: 414px) {
    height: 75vh;
  }
`;

export const SaveWorldTwoContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

export const SaveWorldTwoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;

  @media (max-width: 414px) {
    padding: 20px 0;
  }

  h3 {
    font-size: 3rem;

    @media (max-width: 375px) {
      font-size: 2rem;
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

export const SaveWorldIconsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    padding: 0 20px;
  }

  @media (max-width: 540px) {
    row-gap: 20px;
  }
`;

export const TitleIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.5rem;
    color: black;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-top: 20px;

    @media (max-width: 375px) {
      font-size: 1.2rem;
    }
  }
`;
