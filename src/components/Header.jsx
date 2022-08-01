import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header" style={{ background: "grey" }}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/connection">Connection</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
