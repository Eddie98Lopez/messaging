import styled from 'styled-components'

/*Below is the parent nav element that will house navLinks. */

const Nav = styled.nav`
width: 100%;
height: 100%;
padding: 2rem 0;
background: #E57E31;
color:white;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:auto;
z-index:3;

& .navWords{
    @media only screen and (max-width:768px){
        display:none;
    }
    @media only screen and (max-width:600px){
        display:inline;
    }
}

& .logo{
    display:flex;
    justify-content: center;
    width: 100%;
    align-items:center;
    margin-bottom: 2rem;

    & .logoSvg{
        display:flex;
        width:70%;
    }

    @media only screen and (max-width:600px){
        padding:1rem;
        height:3.5rem;
        margin-bottom: 0;
        justify-content: space-between;
        

        & .logoSvg{
            position:relative;
            top:-4px;
            left:-35%;
        
            width:100px;
        }

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
    overflow:hidden;
    top:0;
    padding:0;


}

`



/*Below is "NavLinks" a seperzate div of just the links.
 Its seperated purposefully so when the screen is resized the mobile menu will toggle 
 on and off based on state */

const NavLinks = styled.div`

    box-sizing:border-box;
    width:100%;
    margin:auto;
    height:95%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:auto;

    & .top{
        display:inherit;
        flex-direction: inherit;
    }

    & .divider{
        height: 1.5px;
        width: 90%;
        margin:auto;
        background: white;
        margin: 1rem;
    }
    

    & .link{
        height:3rem;
        width:100%;
        padding:1rem;
        display:flex;
        justify-content: space-between;
        align-items:center;
        text-decoration:none;
        color:white;
        font-family: loos-normal, sans-serif;
        cursor:pointer;

        @media only screen and (max-width:768px){
           padding:1.2rem;
           margin:0 auto;
        }
        
        }

    & .logout{
        justify-content: center;
        & span{
            margin-left: 1rem;

        }
    }
    & .active{
        font-weight: 700;
        background: white;
        color: #E57E31;
        transition: .25s ease-in-out;
    }


    @media only screen and (max-width:768px){
        align-items:center;
    }


    @media only screen and (max-width:600px){
        & .link{
            align-items:left;
        }
        display:${props => props.mobile !== true ? 'none' : 'flex'};
        background: lightgrey;
        padding:.5rem 0;

        & .disappear{
            display: none;
        }
    }
    
`



export {NavLinks,Nav}