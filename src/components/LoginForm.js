import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import loginSchema from "../utils/loginSchema";
import * as Yup from "yup";

const Login = (props) => {
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
                push('/dash/inbox')

            })
            .catch(err => {
                console.log(err)
            }) 
  };

  useEffect(() => {
    loginSchema.isValid(form).then((res) => setDisabled(!res));
  }, [form]);

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <input
            name="username"
            type="text"
            value={form.username}
            onChange={change}
            placeholder="Username"
          />
          <div>{errs.username}</div>
        </div>

        <div>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={change}
            placeholder="Password"
          />
          <div>{errs.password}</div>
        </div>

        <button disabled={disabled}>login</button>
      </form>
    </div>
  );
};

export default Login;
