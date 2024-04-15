import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Container from "./components/Container";
import Login from "./components/Login";
import RegistrationPage from "./components/RegistrationPage";

const router = createBrowserRouter([
 
  {
    path:"/",
    element:<Container/>
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/RegistrationPage",
    element:<RegistrationPage/>
  }
]

)

function App() {
  return <RouterProvider router={router} />

}

export default App;
