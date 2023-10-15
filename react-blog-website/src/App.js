import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Single from "./Pages/Single"
import Write from "./Pages/Write"
import Home from "./Pages/Home"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar"
import "./Styles.scss"

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      }
    ]
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);


function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}



export default App;
