import styled from 'styled-components'

const Thumb = styled.div`
height:3rem;
width:95%;
margin:.15rem auto;
display:flex;
justify-content:space-between;
align-items:center;
background: #fafafa;
padding: 0 2rem;


& .messInfo{
    width:80%;
    cursor:pointer;


    & h3{
        font-style:bold;
        font-weight:700;
        display:inline;
    }
    
    & p{
        color:grey;
        opacity: .5;
        display:inline;
    }
}

& .buttons{
    opacity:0;
    transition: .3s ease-in-out;
    width:20%;
    height: 1.25rem;
    display:flex;
    justify-content: flex-end;

}

&:hover{

    & .buttons{
        opacity:1;
        transition: .3s ease-in-out;
    
    }

}`

export default Thumb