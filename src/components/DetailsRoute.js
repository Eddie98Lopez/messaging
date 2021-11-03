import React from "react";
import Details from "./Details";
import { useStore } from "../utils";
import styled from 'styled-components'

const styles = `
display: flex;
position:absolute;
background:white;
z-index:2;
width:100%;
height:100%;
`


const Wrapper  = styled.div`

@media only screen and (max-width:600px){
  ${props => props.current=== null ? 'display:none;' : `${styles}` }
}`

const DetailsRoute = (props) => {

  const {current} = useStore().store;

  return (
    <Wrapper current={current}>
      {current === null ? (
        "Loading..."
      ) : (
        <Details message={{...current}} />
      )}
    </Wrapper>
  );
};

export default DetailsRoute;
