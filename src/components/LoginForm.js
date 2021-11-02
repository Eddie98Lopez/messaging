import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {Form, Input} from './styled-components'
import {loginSchema} from "../utils";
import * as Yup from "yup";

const LoginForm = (props) => {
    const {push} = useHistory()
  const initialForm = {
    username: "",
    password: "",
  };

  const initialErrs = {
    username: "",
    password: "",
  };

  const [form, setForm] = useState(initialForm);
  const [errs, setErrs] = useState(initialErrs);
  const [disabled, setDisabled] = useState(true);
  const [loginErr,setLoginErr] = useState('')

  const change = (e) => {
    const { name, value } = e.target;
    Yup.reach(loginSchema, name)
      .validate(value)
      .then((res) => {
        setErrs({ ...errs, [name]: "" });
      })
      .catch((err) => {
        setErrs({ ...errs, [name]: err.errors[0] });
      });
    setForm({ ...form, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    axios.post('https://messaging-test.bixly.com/api-token-auth/',form)
            .then(res => {
                console.log(res)
                const token = res.data.token
                localStorage.setItem('token',token)
                console.log(localStorage)
                push('/dash/inbox')

            })
            .catch(err => {
                setLoginErr('username or password is incorrect')
            }) 
  };

  useEffect(() => {
    loginSchema.isValid(form).then((res) => setDisabled(!res));
  }, [form]);

  return (
    <div>
      <Form onSubmit={submit}>
        <div>
          <Input
            name="username"
            type="text"
            value={form.username}
            onChange={change}
            placeholder="username"
          />
          <div className = 'errors'>{errs.username}</div>
        </div>

        <div>
          <Input
            name="password"
            type="password"
            value={form.password}
            onChange={change}
            placeholder="password"
          />
          <div className = 'errors'>{errs.password}</div>
        </div>

        <div className='errors'>{loginErr}</div>

        <button disabled={disabled}>login</button>
      </Form>
    </div>
  );
};

export default LoginForm;
