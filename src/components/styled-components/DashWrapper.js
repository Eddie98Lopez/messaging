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
  @media only screen and (max-width: 600px) {
    display: block;

    & .compose{
      display: block;

    }
  }


`