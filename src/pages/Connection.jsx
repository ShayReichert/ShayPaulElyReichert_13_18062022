import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../utils/style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../features/userActions";

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

const Error = styled.div`
  font-size: 0.9rem;
  color: ${colors.red};
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
  const [hasRememberMe, setHasRememberMe] = useState(false);
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const credentials = {
    email: email,
    password: password,
  };

  const toggleRememberMe = () => {
    setHasRememberMe((current) => !current);
  };

  const navigate = useNavigate();

  // If user is authenticate, redirect to profile page
  useEffect(() => {
    if (userInfo) {
      navigate("/profile");
    }
  }, [navigate, userInfo]);

  const handleSubmit = (e) => {
    const userData = { credentials, hasRememberMe };
    e.preventDefault();
    dispatch(userLogin(userData));
  };

  return (
    <main className="main bg-dark">
      <SignInContent>
        <SignInIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          {error && <Error>{error}</Error>}
          <InputWrapper>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={email} onChange={(e) => setUserEmail(e.target.value)} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </InputWrapper>
          <InputRemember>
            <input type="checkbox" id="remember-me" value={hasRememberMe} onChange={toggleRememberMe} />
            <label htmlFor="remember-me">Remember me</label>
          </InputRemember>

          <Button className="sign-in-button" disabled={loading}>
            Sign In
          </Button>
        </form>
      </SignInContent>
    </main>
  );
}

export default Connection;
