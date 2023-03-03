// src/components/Navbar.js

import { Link } from "react-router-dom";
import { useContext } from "react";                     
import { AuthContext } from "../context/auth.context";  


function Navbar(props) {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);   

  
  //  Update the rendering logic to display different content 
  //  depending on whether the user is logged in or not
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/add-mood"><button>Add a mood</button></Link> 
      
      {/*    UPDATE     */}
      {isLoggedIn && (
        <>
          <Link to="/moods">
            <button>Moods</button>
          </Link>        
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
