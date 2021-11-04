import styled from "styled-components";

const DetailButtons = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:1rem;


& div{
  overflow:visible;
}


& button{
    display:inline-block;
    box-shadow:none;
    background: #e57e31;
    margin: 0 .4rem;
}
`

const DetailsWrapper = styled.div`
  
  padding: 3rem;
  overflow-y:scroll;
  max-height: 70vh;

  & h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  & h3 {
    font-size: 1rem;
    margin-bottom: 10px;
    color:lightgrey;
    font-weight:bold;
  }

  & h4 {
    color: lightgrey;
    font-family: sans-serif;
    margin:5px 0;
    font-size:.9rem;
    
  }

  & p {
    margin-top: 1.5rem;
    font-size: 1rem;
    font-family: sans-serif;
    color: grey;
    overflow-y: scroll;
  }

  @media only screen and (max-width:600px){
      padding: 2rem;
  }
`;



export { DetailsWrapper, DetailButtons};
