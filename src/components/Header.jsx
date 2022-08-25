import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import colors from "../utils/style/colors";
import { useDispatch, useSelector } from "react-redux";
import { authLogOut } from "../features/auth";
import { selectAuth } from "../utils/selector";

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  a {
    font-weight: bold;
    color: ${colors.darkblue};
  }

  a.router-link-exact-active {
    color: #42b983;
  }
`;

const LogoLinkContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

const HomeLogo = styled.img`
  max-width: 100%;
  width: 200px;
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  const auth = useSelector(selectAuth);

  if (auth.status === "login") {
    return <HeaderLogOut />;
  } else {
    return <HeaderLogIn />;
  }
}

export default Header;

function HeaderLogIn() {
  return (
    <HeaderContainer>
      <LogoLink />
      <ItemLink to="/connection">
        <FontAwesomeIcon icon={faUserCircle} /> Sign In
      </ItemLink>
    </HeaderContainer>
  );
}

function HeaderLogOut() {
  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(authLogOut);
  };

  return (
    <HeaderContainer>
      <LogoLink />
      <div>
        <ItemLink to="/profile">
          <FontAwesomeIcon icon={faUserCircle} /> Tony
        </ItemLink>
        <ItemLink to="/" onClick={handleLogOut}>
          <FontAwesomeIcon icon={faSignOut} /> Sign Out
        </ItemLink>
      </div>
    </HeaderContainer>
  );
}

function LogoLink() {
  return (
    <LogoLinkContainer to="/">
      <HomeLogo src={Logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </LogoLinkContainer>
  );
}
