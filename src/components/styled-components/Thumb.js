import styled from "styled-components";

const Thumb = styled.div`
  height: 4.5rem;
  width: 100%;
  margin: 0 auto;
  border-bottom: .25px solid lightgrey;
  border-left: ${props => props.read === 'false' ? '6px solid rgba(86,86,86,.7)': '6px solid rgba(86,86,86,0)'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:${props => props.read === 'false' ? 'white' : '#f7f1da'};
  padding: 0 2rem;
  transition: .4s ease-in-out;
 
  

  & .messInfo {
    width: 80%;
    cursor: pointer;

    & h3 {
      font-style: bold;
      font-weight: 700;
      color: #757575;
      white-space:nowrap;
      overflow:hidden;
      text-overflow: ellipsis;
    }

    & p {
      color: grey;
      opacity: 0.5;
      font-size:.8rem;
      margin-bottom: .25rem;
    }
  }

  & .buttons {
    opacity: 0;
    transition: 0.3s ease-in-out;
    width: 20%;
    height: 1.25rem;
    display: flex;
    justify-content: space-around;
  }

  &:hover {
    background: #fff9f7;
    & .buttons {
      opacity: 1;
      transition: 0.3s ease-in-out;
    }
  }

  @media only screen and (max-width: 768px){
    width:100%;

    & .buttons{
      opacity:1;
      justify-content:space-between:
      height:1.75rem;
 
    }
  }
`;

export default Thumb;
