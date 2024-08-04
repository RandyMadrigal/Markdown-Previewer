import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="container  mx-auto h-20 w-full border-b-2 flex justify-center">
      <ul className="flex flex-row justify-center items-center font-bold capitalize gap-3 text-xl">
        <li>
          <Link className="hover:uppercase hover:underline" to="/">
            what is Markdown?
          </Link>
        </li>
        <li>
          <Link className="hover:uppercase hover:underline" to="/Markdown">
            Markdown
          </Link>
        </li>
      </ul>
    </div>
  );
};
