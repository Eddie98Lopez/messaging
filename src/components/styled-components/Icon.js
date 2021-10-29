import React from 'react'
import styled from 'styled-components'

const Ico = styled.div`

height:${props => props.height ? props.height : 'inherit'};
display:inline;
margin-right:1rem;

& img{
    width:auto;
    height:100%;

}`

const Icon = (props) => {
    const {img,alt,height}=props
    return(
        <Ico height={height}>
            <img src={img} alt={alt}/>
        </Ico>
    )
}

export {Icon}