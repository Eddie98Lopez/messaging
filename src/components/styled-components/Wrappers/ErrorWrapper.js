import styled from 'styled-components'

export const ErrorWrapper = styled.div`
position:fixed;
z-index:5;
width:100%;
height:100vh;
background: rgba(150, 150, 150,.5);
display: ${props => props.display === 'true' ? 'flex' : 'none'};
justify-content:center;
align-items:center;

& div{
    background: white;
    box-sizing:border-box;
    padding:4rem;
    color:crimson;

    & h3{
        margin-bottom:2rem;
    }
    & button{
        width:150px;
    }
}`