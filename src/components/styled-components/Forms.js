import styled from 'styled-components'

const Form = styled.form`
padding: 2rem;
height: auto;
box-sizing: border-box;

& button{
    float:right;
    margin-top:2rem;
};

& .errors{
    color: crimson
};

@media only screen and (max-width:600){
    background:blue;
}

`

const Input = styled.input`
outline: none;
width: 100%;
box-sizing: border-box;
height: 3rem;
padding:.05rem 0px;
margin: .5rem 0;
border:none;
border-bottom: solid 2px #E57E31;
background: white;
border-radius: 2px;
font-size: 1.5rem;
color:#E57E31;

@media only screen and (max-width:600){
    height:4rem;
}

&::placeholder{
    color: #E57E31;
    font-weight: bold;
    opacity:.25;
}`

const TextArea = styled.textarea`

outline: none;
width: 100%;
box-sizing: border-box;
height: 15rem;
padding:.05rem 0px;
margin: .5rem 0;
border:none;
background: #f5f5f5;
border-radius: 5px;
font-size: 1rem;
color:grey;

&::placeholder{
    color: #E57E31;
    font-weight: bold;
    opacity:.25;
}
`



export{ Form, Input, TextArea }