import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import colors from "../utils/style/colors";

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }

  a.router-link-exact-active {
    color: #42b983;
  }
`;

const LogoLink = styled(Link)`
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
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <HomeLogo src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </LogoLink>

      <ItemLink to="/connection">
        <FontAwesomeIcon icon={faUserCircle} /> Sign In
      </ItemLink>

      {/* <Link to="/profile">Profile</Link> */}
    </HeaderContainer>
  );
}

export default Header;
