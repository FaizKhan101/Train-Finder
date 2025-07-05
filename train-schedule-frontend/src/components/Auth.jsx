import { useContext, useState } from "react";
import { AuthContext } from "./Auth.context";
import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.jpeg";

export default function Auth() {
  const navigate = useNavigate();
  const { login, signup } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login(email, password);
    } else {
      signup(email, password);
    }
    navigate(-1);
  };
  return (
    <main className="form-signin m-auto mt-5 col-md-4">
      {" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <img
          className="mb-4"
          src={logoImg}
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">
          {isLogin ? "Please sign in" : "Please sign up"}
        </h1>{" "}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>{" "}
        </div>{" "}
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>{" "}
        </div>{" "}
        <button
          className="btn btn-primary w-100 py-2 mt-3"
          type="submit"
          disabled={!email || !password}
        >
          {isLogin ? "Sign in" : "Sign up"}
        </button>{" "}
        <p className="mt-5 mb-3 text-body-secondary">
          {isLogin
            ? "You don't have an account? "
            : "You already have an account? "}
          <span
            className="text-primary pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>{" "}
      </form>{" "}
    </main>
  );
}
