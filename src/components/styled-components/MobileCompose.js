import React from 'react'
import { Button } from '.'
import { useHistory } from 'react-router'

const style = `
bottom:4%;
right:8%;
width:150px;
display:none;
@media only screen and (max-width:600px){
  display:flex;
}
`

const ComposeButton = (props) =>{
    const {push} = useHistory()

    return (
        <Button {...props} fixed={style} 
        onClick={()=>push('/dash/compose')}>
             Compose 
        </Button>
    )
}

export default ComposeButton