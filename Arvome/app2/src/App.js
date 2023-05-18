import Router from "./Router";
import { Toaster } from "react-hot-toast";
import PreLoader from "./components/PreLoader";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { loading } = useContext(AuthContext);
  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Router />
          <Toaster />
        </>
      )}
    </>
  );
}

export default App;
