import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="#263238 blue-grey darken-4">
      <div className="nav-wrapper #263238 blue-grey darken-4">
        <Link to="/" className="brand-logo">
          React
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header
