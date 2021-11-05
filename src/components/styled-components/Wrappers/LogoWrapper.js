import styled from 'styled-components'


export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  & .logoSvg {
    width: 75%;
  }

  & .hamburger {
    display: none;
    height: 2rem;
  }

  @media only screen and (max-width: 600px) {
    height: 3.5rem;
    margin-bottom: 0;
    justify-content: space-between;
    padding: 0 2rem;

    & .logoSvg {
      height: 30px;
      width: auto;
    }

    & .hamburger {
      display: block;
      height: 30px;
      width: auto;
    }
  }
`;
