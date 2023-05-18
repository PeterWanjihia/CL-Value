import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });

    return unsub;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, authenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
