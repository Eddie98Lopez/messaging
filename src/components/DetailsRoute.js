import React from "react";
import Details from "./Details";
import { useStore } from "../utils";
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
const Wrapper = styled.div`
@media only screen and (max-width:600px){
  position:absolute;
  box-sizing:border-box;
  width:100%;
  height:100%;
  background:white;
  z-index:3;
}

`



const DetailsRoute = (props) => {
  const {folder,id} = useParams()
  console.log(folder,id)
  const {folders} = useStore().store

  const details = folders[`${folder}`].filter(item => item.id == id)[0]

  return (
    <Wrapper>
      {details===undefined ? 'Select One' : <Details message={details}/>}

    
    </Wrapper>
  );
};

export default DetailsRoute;
