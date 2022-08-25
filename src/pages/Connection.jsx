import { useState } from "react";
import styled from "styled-components";
import colors from "../utils/style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../utils/selector";
import { authLogIn } from "../features/auth";

const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: ${colors.backgroundLight};
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;

const SignInIcon = styled(FontAwesomeIcon)`
  font-size: 5rem;
`;

const InputRemember = styled.div`
  display: flex;

  label {
    margin-left: 0.25rem;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;

  label {
    font-weight: bold;
  }

  input {
    padding: 5px;
    font-size: 1.2rem;
  }
`;

function Connection() {
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const credentials = {
    email: email,
    password: password,
  };

  const toggleRememberMe = () => {
    setRememberMe((current) => !current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authLogIn(credentials, rememberMe));
  };

  const token = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : auth.data?.body?.token;

  return (
    <main className="main bg-dark">
      <SignInContent>
        <SignInIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={email} onChange={(e) => setUserEmail(e.target.value)} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </InputWrapper>
          <InputRemember>
            <input type="checkbox" id="remember-me" value={rememberMe} onChange={toggleRememberMe} />
            <label htmlFor="remember-me">Remember me</label>
          </InputRemember>

          <Button className="sign-in-button">Sign In</Button>
        </form>
      </SignInContent>
    </main>
  );
}

export default Connection;
