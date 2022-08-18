import styled from "styled-components";
import colors from "../utils/style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";

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
  return (
    <main className="main bg-dark">
      <SignInContent>
        <SignInIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <form>
          <InputWrapper>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </InputWrapper>
          <InputRemember>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </InputRemember>

          <Button>Sign In</Button>
        </form>
      </SignInContent>
    </main>
  );
}

export default Connection;
