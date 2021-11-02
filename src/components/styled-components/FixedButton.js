import styled from "styled-components";
import { Button } from "./Button";

const Wrapper = styled.div`
    z-index:3;
    position:absolute;
    ${(props) => (props.bottom ? `bottom: ${props.bottom};` :'')};
    ${(props) => (props.right ? `right: ${props.right};`:'' )};
    ${(props) => (props.top ? `top: ${props.top};` :'')};
    ${(props) => (props.left ? `left: ${props.left};`:'')};
    
`;

const FixedButton = (props) => {
    const buttonProps = {
        width:props.width,
        height: props.height,
        padSide:props.padSide
    }
  
  return (
    <Wrapper {...props}>
      <Button {...buttonProps}>
        {props.innerText}
      </Button>
    </Wrapper>
  );
};

export default FixedButton
