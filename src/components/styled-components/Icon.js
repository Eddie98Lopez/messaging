import React from 'react'
import styled from 'styled-components'

const Ico = styled.div`

height:${props => props.height ? props.height : '1.5rem'};
display:block;
margin-right:1rem;
cursor:pointer;

& img{
    width:auto;
    height:100%;

}`

const Icon = (props) => {
    const {img,alt,height,onClick}=props
    return(
        <Ico height={height} onClick={onClick}>
            <img src={img} alt={alt}/>
        </Ico>
    )
}

export {Icon}