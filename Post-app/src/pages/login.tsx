import AuthContext from "../context/AuthoContext";
import { useContext } from "react";



export default function LoginPage(){
  const { isAuthenticated, login,logout } = useContext(AuthContext);

  return(
<>
 {!isAuthenticated && (
           <button onClick={login}>Login</button>
        )}

        {isAuthenticated && (
          <>
              <button onClick={logout}>Logout</button>
          </>
        )}




</>







  );

}