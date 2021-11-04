import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  margin: auto;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.height ? props.height : "auto")};
  border: none;
  outline: none;
  border-radius: 100px;
  padding: 1rem ${(props) => (props.padSide ? props.padSide : "1rem")};
  color: #e57e31;
  background: white;
  box-shadow: 3px 3px 5px rgba(99, 99, 99, 0.5);
  cursor: pointer;
  font-size: 1.1rem;
  font-family: loos-normal;
  font-weight: 700;
  transition: ease-in-out .25s;

  &:hover {
    transition: ease-in-out .25s;
    box-shadow: 3px 3px 10px rgba(80,80,80, 0.85)

  }

  &:disabled {
    cursor: auto;
    opacity: 0.3;
  }

  & span {
    transform: translateY(2px);
  }

  ${props => props.fixed ? `
  z-index:3;
  position:absolute;
  ${props.fixed}`: ''}

  ${props => props.style ? props.style : ''}
`;
