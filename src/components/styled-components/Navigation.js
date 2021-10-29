import styled from 'styled-components'

/*Below is the parent nav element that will house navlinks. */

const Nav = styled.nav`
width: 100%;
height: 100%;
align-items: left;
background: #c2c2c2;
padding:2rem;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:left;
z-index:3;

& .logo{
    display:flex;
    justify-content: space-between;
    align-items:center;

    @media only screen and (max-width:600px){
        padding:1rem;
    }

    & .hamburger{
        display:none;
        height:2rem;

        @media only screen and (max-width:600px){
            display:inline-block;
        }
    }
}


@media only screen and (max-width:600px){
    height:auto;
    position:sticky;
    top:0;
    padding:0;
}

`



/*Below is "NavLinks" a seperate div of just the links.
 Its seperated purposefully so when the screen is resized the mobile menu will toggle 
 on and off based on state */

const NavLinks = styled.div`

    box-sizing:border-box;
    height:95%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:right;
    

    & .link{
        height:2.25rem;
        width:100%;
        padding:.75rem auto;
        display:flex;
        align-items:center;
        text-decoration:none;
        color:black;
        cursor:pointer;
        
        }

    @media only screen and (max-width:600px){
        display:${props => props.mobile !== true ? 'none' : 'flex'};
        background: lightgrey;
        padding:1.5rem;
    }
    
`



export {NavLinks,Nav}