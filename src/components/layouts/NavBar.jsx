import { Link } from "react-router-dom";
import "./layouts.css";

export const NavBar = () => {
  return (
    <div className="container  navbar">
      <ul>
        <li>
          <Link to="/">Markdown</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
