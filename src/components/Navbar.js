import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import {useLocation} from "react-router-dom"


function Navbar(props) {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const location= useLocation();
  console.log(location)
  //  Update the rendering logic to display different content
  //  depending on whether the user is logged in or not
  return (
    <nav className="container">
      <Link to="/">
        <button className="glow-on-hover">‰</button>
      </Link>

      {isLoggedIn && (
        <>
      <Link to="/listmood">
        <button>BliSS</button>
       
        
      </Link>
      <Link to="/add-mood">
        <button>Add a mood</button>
      </Link>
      
      </>
      )}
    
      

      {/*    UPDATE     */}
      {isLoggedIn && (
        <>
          <Link to="/moods">
            <button>WHy?</button>
          </Link>
          <button onClick={logOutUser}>Ω</button>
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
