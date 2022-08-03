import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import colors from "../utils/style/colors";

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

const isLoggIn = false;

function LogoLink() {
  return (
    <LogoLinkContainer to="/">
      <HomeLogo src={Logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </LogoLinkContainer>
  );
}

function HeaderLogOut() {
  return (
    <HeaderContainer>
      <LogoLink />

      <ItemLink to="/connection">
        <FontAwesomeIcon icon={faUserCircle} /> Sign In
      </ItemLink>

      {/* <Link to="/profile">Profile</Link> */}
    </HeaderContainer>
  );
}

function HeaderLogIn() {
  return (
    <HeaderContainer>
      <LogoLink />

      <div>
        <ItemLink to="/profile">
          <FontAwesomeIcon icon={faUserCircle} /> Tony
        </ItemLink>
        <ItemLink to="/">
          <FontAwesomeIcon icon={faSignOut} /> Sign Out
        </ItemLink>
      </div>
    </HeaderContainer>
  );
}

function Header() {
  if (isLoggIn) {
    return <HeaderLogIn />;
  } else {
    return <HeaderLogOut />;
  }
}

export default Header;
