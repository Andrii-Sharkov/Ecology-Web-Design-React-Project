import styled from "styled-components";

export const Nav = styled.nav`
  width: 300px;
  height: 100vh;
  position: fixed;
  background-color: yellow;
  top: 0;
  right: 0;
  transition: all 1s ease-in-out;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    row-gap: 20px;

    li {
      list-style-type: none;
      font-size: 1.5rem;
    }
  }
`;
