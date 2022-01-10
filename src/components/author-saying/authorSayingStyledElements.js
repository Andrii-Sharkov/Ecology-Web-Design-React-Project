import styled from "styled-components";

export const AuthorSayingSection = styled.section`
  background-color: #293133;
  height: 35vh;

  @media (max-width: 540px) {
    height: 40vh;
  }
`;

export const AuthorSayingContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

export const AuthorSayingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  border-bottom: 1px solid white;

  p {
    width: 600px;
    text-align: center;
    color: white;
    font-size: 1.3rem;
    line-height: 1.5;

    @media (max-width: 540px) {
      width: 450px;
    }

    @media (max-width: 414px) {
      width: 400px;
    }

    @media (max-width: 375px) {
      width: 340px;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
  margin-top: 50px;
`;
