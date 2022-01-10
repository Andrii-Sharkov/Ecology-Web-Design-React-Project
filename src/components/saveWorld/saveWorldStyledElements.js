import styled from "styled-components";
import ImgBg from "../../images/image-background-3.jpg";

export const SaveWorldSection = styled.section`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)),
    url("${ImgBg}") no-repeat center center / cover;
  height: 130vh;
  background-attachment: fixed;

  @media (max-width: 1280px) {
    height: 142vh;
  }

  @media (max-width: 1024px) {
    height: 120vh;
  }

  @media (max-width: 768px) {
    height: 112vh;
  }

  @media (max-width: 540px) {
    height: 165vh;
  }

  @media (max-width: 414px) {
    height: 142vh;
  }

  @media (max-width: 375px) {
    height: 135vh;
  }
`;

export const SaveWorldContainer = styled.div`
  max-height: 1320px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SaveWorldContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  color: white;

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

export const SaveWorldRowGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 750px;
  column-gap: 30px;
  align-items: center;
  justify-content: center;
  color: white;

  @media (max-width: 1024px) {
    grid-template-columns: 350px 600px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 200px 500px;
  }

  @media (max-width: 540px) {
    grid-template-columns: auto;
  }
`;

export const SaveWorldColumnText = styled.div`
  padding: 30px;

  @media (max-width: 768px) {
    padding: 0;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    width: 300px;
    line-height: 1.4;

    @media (max-width: 768px) {
      width: 200px;
      font-size: 1.3rem;
    }

    @media (max-width: 540px) {
      width: 100%;
      text-align: center;
    }
  }

  p {
    font-size: 1.3rem;
    margin-top: 20px;

    @media (max-width: 540px) {
      margin-bottom: 30px;
      text-align: center;
    }
  }
`;

export const SaveWorldColumnImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    box-shadow: 5px 7px 20px 7px rgba(0, 0, 0, 0.5);
  }
`;

export const SaveWorldRowGridTwo = styled.div`
  display: grid;
  grid-template-columns: 550px 400px;
  column-gap: 30px;
  align-items: center;
  justify-content: center;
  color: white;

  @media (max-width: 1024px) {
    grid-template-columns: 450px 350px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 400px 300px;
  }

  @media (max-width: 540px) {
    grid-template-columns: auto;
  }
`;

export const SaveWorldColumnImageTwo = styled.div`
  transform: translate(-70px, -80px);

  @media (max-width: 768px) {
    transform: translate(10px, -40px);
  }

  @media (max-width: 540px) {
    transform: translate(0px, 10px);
  }

  img {
    width: 100%;
    height: 100%;
    box-shadow: 5px 7px 20px 7px rgba(0, 0, 0, 0.5);
  }
`;

export const SaveWorldColumnTextTwo = styled.div`
  position: relative;
  background-color: white;
  height: 250px;
  width: 400px;
  padding: 50px 15px;
  color: black;
  transform: translate(50px, -100px);

  @media (max-width: 1024px) {
    transform: translate(5px, -70px);
  }

  @media (max-width: 768px) {
    width: 270px;
    height: 180px;
    padding: 30px 15px;
  }

  @media (max-width: 540px) {
    transform: translate(0px, 20px);
    width: 100%;
    text-align: center;
    height: 150px;
  }

  h4 {
    font-size: 2.4rem;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const ImageText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 30%;
  left: 1rem;
  padding: 0 30px;

  @media (max-width: 1024px) {
    top: 19%;
  }

  @media (max-width: 375px) {
    top: 10%;
  }

  @media (max-width: 360px) {
    top: 4%;
  }

  h5 {
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 375px) {
      font-size: 1.3rem;
    }

    @media (max-width: 360px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1.1rem;
    margin: 20px 0;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 360px) {
      margin: 10px 0;
    }
  }

  button {
    font-size: 1.1rem;
    text-transform: uppercase;
    background: none;
    color: white;
    border: none;
    border-bottom: 2px solid white;
    transition: all 0.3s;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 360px) {
      font-size: 0.9rem;
    }

    &:hover {
      letter-spacing: 2.5px;
    }
  }
`;
