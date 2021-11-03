import React, {useEffect, useState} from "react";
import Details from "./Details";
import { useStore } from "../utils";
import {useParams} from 'react-router-dom'
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
  const {folder,id} = useParams()
  console.log( folder,id)
  const {dispatch}= useStore()
  const {folders,current} = useStore().store



  

  useEffect(()=>{
    const details = folders[`${folder}`].filter(item => item.id == id)[0]
    dispatch({type:'SET_CURRENT', payload:details})
    console.log(current)
  },[])
  

  //const {current} = useStore().store;

  return (
    <Wrapper >
      {current === null || current===undefined ? 'Select One' : <Details message={current}/>}

    
    </Wrapper>
  );
};

export default DetailsRoute;
