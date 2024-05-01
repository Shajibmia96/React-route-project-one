import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
      <div >
        
        <div>
          <nav className=" flex justify-between items-center my-4 shadow-lg px-8 py-4">
           <Logo></Logo>
            <ul className=" flex gap-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? 'text-green-500 underline' : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Favorite"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? 'text-green-500 underline' : ""
                  }
                >
                 Favorite
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/LogIn"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? 'text-green-500 underline' : ""
                  }
                >
                  Log in
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
};

export default Navbar;