import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 65% 35%;

  & .left {
    background: #f6f1e3;
    grid-template-area: a;
    overflow: hidden;

    & div {
      position: relative;
      top: 80%;
      left: 5%;
    }
  }

  & .right {
    height: 100%;
    padding: 4rem 0px 2rem 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & .logo {
      align-self: center;
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 30% 70%;
    & .left {
      & div {
        top: 90%;
        height: 3rem;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;

    & .left {
      display: none;
    }

    & .right {
      & .logo {
        display: block;
      }
    }
  }
`;
