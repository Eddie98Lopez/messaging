import styled from 'styled-components'

export const HomeWrapper = styled.div`
height:100vh;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#E57E31;

& div{
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transform:translateY(5%);
}

& svg{
    width:100%;
    height:auto;
    position:relative;
    left:50%;
    transform:translateX(-50%)
}


& button{
    margin-top:3rem;
    display:block;
    transform:translateX(2%)
}

@media only screen and (max-width:500px){

}
`

