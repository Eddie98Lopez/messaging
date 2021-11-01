import styled from "styled-components";

const Thumb = styled.div`
  height: 3rem;
  width: 95%;
  margin: 0 auto;
  border-bottom: .1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F6F1E3;
  padding: 0 2rem;
  transition: .4s ease-in-out;

  & .messInfo {
    width: 80%;
    cursor: pointer;

    & h3 {
      font-style: bold;
      font-weight: 700;
      display: inline;
    }

    & p {
      color: grey;
      opacity: 0.5;
      display: inline;
    }
  }

  & .buttons {
    opacity: 0;
    transition: 0.3s ease-in-out;
    width: 20%;
    height: 1.25rem;
    display: flex;
    justify-content: flex-end;
  }

  &:hover {
    background: #fff9f7;
    & .buttons {
      opacity: 1;
      transition: 0.3s ease-in-out;
    }
  }
`;

export default Thumb;
