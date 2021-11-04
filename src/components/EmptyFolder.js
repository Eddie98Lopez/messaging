import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;`

const EmptyFolder = (props) => {
    const {folder} = props
    return (
        <Wrapper>
        <p>{folder} is empty</p>
        </Wrapper>
    )
}

export default EmptyFolder