import styled from "styled-components";

/*Below is the parent nav element that will house navLinks. */

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  background: #e57e31;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: auto;
  z-index: 3;

  @media only screen and (max-width: 768px) {
    & .navWords{
        display:none;
    }
  }

  @media only screen and (max-width: 600px) {
    height: auto;
    position: sticky;
    overflow: hidden;
    top: 0;
    padding: 0;

    & .navWords{
        display:inline;
    }
  }
`;

/*Below is "NavLinks" a seperzate div of just the links.
 Its seperated purposefully so when the screen is resized the mobile menu will toggle 
 on and off based on state */

export const NavLinks = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  & .top {
    display: inherit;
    flex-direction: inherit;
    & button {
      margin-bottom: 10px;
    }
  }

  & .divider {
    height: 1.5px;
    width: 90%;
    margin: auto;
    background: white;
    margin: 1rem;
  }

  & .link {
    height: auto;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items:center;
    text-decoration: none;
    color: white;
    font-family: loos-normal, sans-serif;
    cursor: pointer;


  }
  & .active {
    font-weight: 700;
    background: white;
    color: #e57e31;
    transition: 0.25s ease-in-out;
  }


  & .logout {
    justify-content: center;
    & span {
      margin-left: 1rem;
    }
  }

  @media only screen and (max-width: 768px) {
    align-items: center;

    & .link{
        padding:1.25rem;
        margin: 0px;
    }
  }

  @media only screen and (max-width: 600px) {
    display: ${(props) => (props.mobile !== true ? "none" : "flex")};
    background: lightgrey;
    padding: 0.5rem 0;

    & .link {
      width:100vw;
    }

    & .disappear {
      display: none;
    }
  }
`;

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
