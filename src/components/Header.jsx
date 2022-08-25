import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import colors from "../utils/style/colors";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfos } from "../features/userActions";
import { logout } from "../features/userSlice";

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
  const { userInfo, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // If token is found, authenticate user
  useEffect(() => {
    if (userToken) {
      dispatch(getUserInfos());
    }
  }, [userToken, dispatch]);

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <HomeLogo src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </LogoLink>

      {userInfo ? (
        <div>
          <ItemLink to="/profile">
            <FontAwesomeIcon icon={faUserCircle} /> {userInfo?.firstName}
          </ItemLink>
          <ItemLink to="/" onClick={() => dispatch(logout())}>
            <FontAwesomeIcon icon={faSignOut} /> Sign Out
          </ItemLink>
        </div>
      ) : (
        <ItemLink to="/connection">
          <FontAwesomeIcon icon={faUserCircle} /> Sign In
        </ItemLink>
      )}
    </HeaderContainer>
  );
}

export default Header;
