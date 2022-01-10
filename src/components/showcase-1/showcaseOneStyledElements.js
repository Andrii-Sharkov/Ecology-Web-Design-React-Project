import styled from "styled-components";
import { ImQuotesLeft as quotes } from "react-icons/im";

export const ShowcaseOneSection = styled.section`
  background-color: white;
  height: 190vh;

  @media (max-width: 1280px) {
    height: 205vh;
  }

  @media (max-width: 1024px) {
    height: 200vh;
  }

  @media (max-width: 768px) {
    height: 325vh;
  }

  @media (max-width: 414px) {
    height: 295vh;
  }

  @media (max-width: 375px) {
    height: 290vh;
  }

  @media (max-width: 360px) {
    height: 295vh;
  }
`;

export const ShowcaseOneContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 70px 20px;

  @media (max-width: 414px) {
    padding: 40px 20px;
  }
`;

export const RowOneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ColumnLeft = styled.div`
  flex-basis: 50%;

  img {
    width: 100%;
    height: 100%;
    box-shadow: 5px 7px 7px rgba(0, 0, 0, 0.6);
  }
`;

export const ColumnRight = styled.div`
  flex-direction: column;
  flex-basis: 50%;
  padding: 0 50px;

  h2 {
    font-size: 3rem;

    @media (max-width: 414px) {
      font-size: 2rem;
      margin-top: 20px;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.3;

    @media (max-width: 414px) {
      font-size: 1.1rem;
      line-height: 1.1;
    }
  }
`;

export const Horizontal = styled.div`
  width: 80px;
  height: 3px;
  background-color: #74ae2d;
  margin: 20px 0;
`;

export const Quotes = styled(quotes)`
  color: lightgray;
  font-size: 5rem;
  position: absolute;
  top: -40px;
  left: 0;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RowTwoWrapper = styled.div`
  display: flex;
  align-items: center;
  transform: translateY(-60px);

  @media (max-width: 1024px) {
    transform: translateY(-15px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    transform: translateY(30px);
  }
`;

export const TextColumnLeft = styled.div`
  flex-basis: 25%;
  position: relative;
  padding: 0 20px;

  p {
    font-size: 1.5rem;
    line-height: 1.3;
    z-index: 5;
    position: absolute;
    top: 20px;
    left: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const ImageColumnCenter = styled.div`
  flex-basis: 50%;

  img {
    width: 100%;
    height: 100%;
    box-shadow: 5px 7px 7px rgba(0, 0, 0, 0.6);
  }
`;

export const TextColumnRight = styled.div`
  flex-basis: 25%;
  background-color: #f2f2f2;
  padding: 20px 25px;
  transform: translateX(-60px);

  @media (max-width: 768px) {
    transform: translateX(0px);
    margin: 25px 0;
  }

  h2 {
    font-size: 2.4rem;

    @media (max-width: 1024px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.3;

    @media (max-width: 1024px) {
      font-size: 1.1rem;
      line-height: 1.2;
    }
  }
`;

export const RowThreeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 80px;
  position: relative;

  @media (max-width: 1024px) {
    margin-top: 105px;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;

export const RowThreeContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-basis: 30%;

  h2 {
    font-size: 3rem;

    @media (max-width: 414px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.3;
  }
`;

export const RowThreeContentCenter = styled.div`
  flex-basis: 35%;
  position: absolute;
  right: 350px;
  bottom: -130px;
  width: 450px;
  height: auto;
  z-index: 5;

  @media (max-width: 1024px) {
    right: 220px;
  }

  @media (max-width: 768px) {
    right: 130px;
    bottom: -315px;
  }

  @media (max-width: 540px) {
    right: 30px;
  }

  @media (max-width: 414px) {
    right: -90px;
    bottom: -270px;
  }

  @media (max-width: 375px) {
    right: -125px;
    bottom: -240px;
  }

  img {
    width: 100%;
    height: 100%;
    box-shadow: 5px 7px 20px 7px rgba(0, 0, 0, 0.5);

    @media (max-width: 414px) {
      width: 80%;
      height: 100%;
    }

    @media (max-width: 375px) {
      width: 70%;
      height: 100%;
    }
  }
`;

export const RowThreeContentRight = styled.div`
  flex-basis: 35%;
  position: absolute;
  top: -100px;
  right: 40px;
  width: 350px;
  height: auto;
  z-index: 10;

  @media (max-width: 768px) {
    top: 0;
  }

  @media (max-width: 540px) {
    top: 610px;
    right: 75px;
  }

  @media (max-width: 414px) {
    top: 580px;
    right: 5px;
  }

  @media (max-width: 375px) {
    right: -25px;
    top: 580px;
  }

  @media (max-width: 360px) {
    top: 655px;
  }

  img {
    width: 100%;
    height: 100%;
    box-shadow: 5px 7px 20px 7px rgba(0, 0, 0, 0.5);

    @media (max-width: 375px) {
      width: 90%;
      height: 100%;
    }
  }
`;
