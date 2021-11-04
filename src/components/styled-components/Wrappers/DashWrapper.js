import styled from "styled-components";

export const DashWrapper = styled.div`
  width: 100%;
  height: inherit;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 100%;



  & .compose{
    display:none;

  }
  @media only screen and (max-width:768px){
  grid-template-columns: 70px auto;
}
  @media only screen and (max-width: 600px) {
    display: block;

    & .compose{
      display: block;

    }
  }


`

export const MainWrapper = styled.div`

& .folder{
  background: rgba(255, 251, 194,.3);
  overflow-y:scroll;


}


  display:grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100%;
  box-sizing:border-box;

  @media only screen and (max-width:846px){
    grid-template-columns: 40% 2fr;

  }
  @media only screen and (max-width:600px){
    grid-template-columns: 100%;

  }
`