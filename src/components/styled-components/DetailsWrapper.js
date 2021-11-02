import styled from "styled-components";

const DetailsWrapper = styled.div`
  box-sizing: border-box;
  padding: 3rem;

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
  }

  @media only screen and (max-width:600px){
      padding: 2rem;
  }
`;

export { DetailsWrapper };
