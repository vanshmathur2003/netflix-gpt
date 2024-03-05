import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LoginPage from "./Components/LoginPage"
import Browse from "./Components/Browse"
import SignupPage from "./Components/SignupPage"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./Utils/firebase"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "./Utils/userSlice"


function App() {
  const dispatch = useDispatch()
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/Signup",
      element: <SignupPage />
    },
    {
      path: "/Browse",
      element: <Browse />
    }
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        console.log("ok")
        // navigate("/Browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        // ...

      }
    });
  }, [])

  return (
    <>
      < RouterProvider router={router} />
    </>
  )
}

export default App
