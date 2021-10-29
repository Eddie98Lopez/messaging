import React, { useState } from 'react'

const Login = (props) => {

    const initialForm = {
        username:'',
        password:''
    }

    const [form,setForm] = useState(initialForm)

    const change = e => {
        const {name, value} = e.target
        setForm({...form, [name]:value})
    }

    const submit = e => {
        e.preventDefault()
        /*axios.post('url',form)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            }) */
    }

    return <div>

        <form onSubmit={submit}>
            <input
                name='username'
                type='text'
                value={form.username}
                onChange={change}
                placeholder='Username'/>
            <input
                name='username'
                type='text'
                value={form.username}
                onChange={change}
                placeholder='Username'/>

            <button>login</button>
        </form>

    </div>
}

export default Login