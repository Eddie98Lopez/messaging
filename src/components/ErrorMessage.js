import React, {useState} from "react";
import styled from 'styled-components'
import { Button } from "./styled-components";
import { useStore } from "../utils";

const ErrorWrapper = styled.div`
position:fixed;
z-index:5;
width:100%;
height:100vh;
background: rgba(150, 150, 150,.5);
display: ${props => props.display === true ? 'flex' : 'none'};
justify-content:center;
align-items:center;

& div{
    background: white;
    box-sizing:border-box;
    padding:4rem;
    color:crimson;
    

}`

const ErrorMessage = (props) => {

    const {store,dispatch} = useStore()
    const {errors, err_message} = store
    const action = {
        type:"CLOSE_ERROR"
    }

    return(
        <ErrorWrapper display={errors}>
            <div>

                <h3>{err_message}</h3>
                <Button onClick={()=>dispatch(action)}>close</Button>

            </div>
        </ErrorWrapper>

    )


}

export default ErrorMessage