import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./Components/Login"
import Browse from "./Components/Browse"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
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
