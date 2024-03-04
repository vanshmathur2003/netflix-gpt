import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const toplogo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

const Browse = () => {
  const user = useSelector(store=>store.user)
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <>
      <div className="flex justify-between items-center bg-black">
        <div>
          <img src={toplogo} className="h-[4rem]" />
        </div>
        <div className="flex gap-5">
          <div>
          </div>
          <div className="text-white">{user.email}</div>
          <div className="text-white"> {user.displayName}</div>
          <button onClick={handleSignOut} className="text-white mr-[1rem]">Sign Out</button>
        </div>
      </div>
    </>
  )
}

export default Browse