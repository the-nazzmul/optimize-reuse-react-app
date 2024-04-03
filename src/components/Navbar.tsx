import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-400 p-6 text-white">
        <ul className="flex justify-around">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/lazyload">LazyLoad</NavLink>
          </li>
          <li>
            <NavLink to="/use-memo">UseMemo</NavLink>
          </li>
          <li>
            <NavLink to="/use-callback">UseCallback</NavLink>
          </li>
          <li>
            <NavLink to="/ghost-hunting">Ghost</NavLink>
          </li>
          <li>
            <NavLink to="/reusable-component">Reusable</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
