import React, { useState } from "react";
import "../Login.css";
import { useHistory } from "react-router-dom";

import { register } from "../../../services/UserService.js";
import { setAccessToken } from "../../../stores/AccessTokenStore";

// eslint-disable-next-line no-useless-escape
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validators = {
  email: (value) => {
    let message;

    if (!value) {
      message = "Email is required";
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "Email is invalid";
    }
    return message;
  },
  password: (value) => {
    let message;

    if (!value) {
      message = "Password is required";
    } else if (value.length < 8) {
      message = "Password must have 8 characters or more";
    }
    return message;
  },
};

const Login = ({ createUser }) => {
  const { push } = useHistory();
  const [state, setState] = useState({
    fields: {
      email: "",
      password: "",
    },
    errors: {
      email: validators.email(),
      password: validators.password(),
    },
  });

  const [touched, setTouched] = useState({});

  const isValid = () => {
    const { errors } = state;
    return !Object.keys(errors).some((error) => errors[error]);
  };

  const onSubmit = (e) => {
    const { fields } = state;
    e.preventDefault();

    if (isValid()) {
      register(fields).then((response) => {
        setAccessToken(response);
        push("/");
      });
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      fields: {
        ...prevState.fields,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: validators[name] && validators[name](value),
      },
    }));
  };

  const onBlur = (e) => {
    const { name } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const onFocus = (e) => {
    const { name } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: false,
    }));
  };

  const { email, password } = state.fields;
  const { errors } = state;

  return (
    <div className="Register">
        <div className="shownavbar"></div>
      <main className="form-signin">
        <form onSubmit={onSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <label htmlFor="floatingInput">Email address</label>
            <input
              className={`form-control ${
                touched.email && errors.email ? "is-invalid" : ""
              }`}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              placeholder="name@example.com"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="form-floating">
            <label htmlFor="password">Password</label>
            <input
              className={`form-control ${
                touched.password && errors.password ? "is-invalid" : ""
              }`}
              type="password"
              id="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <div className="checkbox mb-3 mt-4">
            <label className="">
              <input type="checkbox" value="remember-me" /> Remember me{" "}
            </label>
          </div>
          <button
            className="w-80 btn btn-lg btn btn-outline-success"
            type="submit"
            disabled={!isValid}
          >
            Register
          </button>
          <p className="mt-5 mb-3 text-muted">© 2021</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
