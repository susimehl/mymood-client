import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import DropDown from "./DropDown"

function Navbar(props) {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  //  Update the rendering logic to display different content
  //  depending on whether the user is logged in or not
  return (
    <nav>
      <Link to="/">
        <button>‰</button>
      </Link>

      {isLoggedIn && (
        <>
      <Link to="/listmood">
        <button>BliSS</button>
      </Link>
      <Link to="/add-mood">
        <button>Add a mood</button>
      </Link>
      <DropDown moods={props.moods} filterMoods={props.filterMoods} />
      </>
      )}

      {/*    UPDATE     */}
      {isLoggedIn && (
        <>
          <Link to="/moods">
            <button>WHy?</button>
          </Link>
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button>Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button>Login</button>{" "}
          </Link>
        
       
        </>
      )}
    </nav>
  );
}

export default Navbar;
