import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Orders from "./pages/Orders";

function Router() {
  const { currentUser } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <NoProtectedRoute currentUser={currentUser}>
          <Home />
        </NoProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: (
        <NoProtectedRoute currentUser={currentUser}>
          <Login />
        </NoProtectedRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <NoProtectedRoute currentUser={currentUser}>
          <Register />
        </NoProtectedRoute>
      ),
    },
    {
      path: "/forgot",
      element: (
        <NoProtectedRoute currentUser={currentUser}>
          <Forgot />
        </NoProtectedRoute>
      ),
    },
    {
      path: "/orders",
      element: (
        <ProtectedRoute currentUser={currentUser}>
          <Orders />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;

const ProtectedRoute = ({ children, currentUser }) => {
  if (currentUser) return children;
  return <Navigate to="/login" replace />;
};

const NoProtectedRoute = ({ children, currentUser }) => {
  if (currentUser) return <Navigate to="/orders" replace />;
  return children;
};
