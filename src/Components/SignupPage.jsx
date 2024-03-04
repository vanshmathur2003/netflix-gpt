/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import { LoginSignupValidate } from "../Utils/LoginSignupValidate"
import { useRef, useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";



const toplogo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
const bgImg = "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"


const SignupPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [errorMessage, setErrorMessage] = useState(null)
    const name = useRef()
    const pass = useRef()
    const email = useRef()

    const handleBtnClick = () => {
        const message = LoginSignupValidate(email.current.value, pass.current.value)
        setErrorMessage(message)
        if (message) return;
        createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value
                }).then(() => {
                    // Profile updated!
                    const { uid, email, displayName } = auth.currentUser;
                    dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                    navigate("/Browse")

                }).catch((error) => {
                    setErrorMessage(error)

                });
                setErrorMessage("User Succesfully Signed up")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                setErrorMessage(error.message);
                // ..
            });
    }


    return (
        <>
            <img className="h-screen absolute " src={bgImg} alt="bgimg" />
            <div className="absolute h-screen w-screen bg-black bg-opacity-60"></div>
            <img className="w-44 absolute" src={toplogo} alt="logo" />
            <div className="absolute text-white  bg-black bg-opacity-60 w-3/12 mx-auto left-0 right-0 mt-[250px] rounded-sm ">
                <div className="p-12">
                    <h1 className="text-3xl pl-2 pb-2">Sign Up</h1>
                    <form className="flex flex-col " onSubmit={(e) => { e.preventDefault() }}>
                        <input ref={name} type="text" placeholder="Full Name" className="p-2 pl-4 m-2 rounded-md bg-gray-700" />
                        <input ref={email} type="text" placeholder="Email Address" className="p-2 pl-4 m-2 rounded-md bg-gray-700" />
                        <input ref={pass} type="password" placeholder="Password" className="p-2 pl-4 m-2 rounded-md  bg-gray-700" />
                        <p className="ml-4 text-red-500 text-[10px]">{errorMessage}</p>
                        <button onClick={handleBtnClick} className="p-2 m-2 bg-red-700 rounded-md ">Sign up</button>
                    </form>
                    <div className="flex flex-row mt-12 ml-2">
                        <h3 className="pr-2 text-gray-400">Already a user? </h3>
                        <Link to={"/"}><button>Sign in now.</button> </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupPage