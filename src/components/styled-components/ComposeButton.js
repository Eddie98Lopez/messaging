import styled from 'styled-components'

export const ComposeButton = styled.button`
width: 80%;
margin:auto;
align-self:center;
display:flex;
align-items:center;
justify-content:center;
height: ${props => props.height ? props.height : 'auto'};
border:none;
outline:none;
border-radius: 100px;
padding: 1rem 2rem;
color: #E57E31;
background:white;
box-shadow: 3px 3px 3px rgba(99, 99, 99,.5);
cursor:pointer;
font-size: 1.1rem;
font-family: loos-normal ;
font-weight: 700;

& span{
    transform: translateY(2px)
}
`

