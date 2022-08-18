import styled from "styled-components";
import colors from "../utils/style/colors";

const DefaultButton = styled.button`
  &.sign-in-button {
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: ${colors.primary};
    background-color: ${colors.primary};
    color: #fff;
    cursor: pointer;
  }

  &.edit-button {
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    font-weight: bold;
    padding: 10px;
  }

  &.transaction-button {
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;

    @media (min-width: 720px) {
      width: 200px;
    }
  }
`;

function Button(props) {
  return <DefaultButton className={props.className}>{props.children}</DefaultButton>;
}

export default Button;
