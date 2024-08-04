import { Link } from "react-router-dom";
import "./layouts.css";

export const NavBar = () => {
  return (
    <div className="container  navbar">
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/Markdown">Markdown</Link>
        </li>
      </ul>
    </div>
  );
};
