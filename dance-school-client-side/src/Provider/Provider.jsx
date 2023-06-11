import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase.config.init";

export  const authProvider = createContext(null);
const Provider = ({children}) => {
  const auth = getAuth(app);

//   create user 

const createUserInfo =(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password);
}


  const authInfo = {
 createUserInfo,
  }
  return (
  <div>
    <authProvider.Provider value={authInfo}>{children}</authProvider.Provider>
  </div>
  
)};

export default Provider;
