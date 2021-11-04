import styled from 'styled-components'

export const HomeWrapper = styled.div`
height:100vh;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#E57E31;


& button{
    margin-top:3rem;
}

@media only screen and (max-width:500px){
    & .logo{
        height:5rem;
    }
}
`

