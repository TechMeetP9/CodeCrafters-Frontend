import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Whitebutton from "../whitebutton/whitebutton";
import Signupbutton from "../signupbutton/signupbutton";
import Login from "../login/Login";
import SignUp from "../signUp/SignUp";
import "./navbar.scss";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header>
      <nav className="navbar" aria-label="Main navigation">
        <button
          className="navbar__brand"
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
        >
          <img
            src="/src/assets/logo.png"
            alt="Code Happen logo"
            className="navbar__logo"
          />
        </button>

        <ul className="navbar__menu">
          {!currentUser ? (
            <>
              <li>
                <Whitebutton
                  text="Log in"
                  onClick={() => setShowLogin(true)}
                />
              </li>
              <li>
                <Signupbutton
                  text="Sign up"
                  onClick={() => setShowSignup(true)}
                />
              </li>
            </>
          ) : (
            <li className="navbar__user">
              <button
                onClick={() => setShowMenu(!showMenu)}
                aria-haspopup="true"
                aria-expanded={showMenu}
                aria-label="User menu"
              >
                <img
                  src={
                    currentUser.profile_image_url ||
                    "/src/assets/default-profile.png"
                  }
                  alt="User avatar"
                  className="navbar__avatar"
                />
              </button>

              {showMenu && (
                <ul className="navbar__dropdown" role="menu">
                  <li role="none">
                    <button role="menuitem" onClick={() => navigate("/profile")}>
                      Ver perfil
                    </button>
                  </li>
                  <li role="none">
                    <button role="menuitem" onClick={handleLogout}>
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>
      </nav>

      <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <SignUp isOpen={showSignup} onClose={() => setShowSignup(false)} />
    </header>
  );
};

export default Navbar;
