import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LoginPage from "./Components/LoginPage"
import Browse from "./Components/Browse"
import SignupPage from "./Components/SignupPage"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>
    },
    {
      path: "/Signup",
      element: <SignupPage/>
    },
    {
      path: "/Browse",
      element: <Browse/>
    }
  ])

  return (
    <>
   < RouterProvider router={router}/>
   </>
  )
}

export default App
