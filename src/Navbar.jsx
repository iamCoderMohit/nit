import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firbase/firebase";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

function Navbar() {
  const [user, loading, error] = useAuthState(auth);

  const [name, setName] = useState('')

  useEffect(() => {
    const fetchUserName = async () => {
      if(user){
        try {
          const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()){
          const data = docSnap.data()
          setName(`${data.fname} ${data.lname}`)
        } else{
          console.log('no such document');        
        }
        } catch (error) {
          console.log(error.message)
        }
      }
    }

    fetchUserName()
  }, [user])
  

  const logOut = async () => {
    try {
      await signOut(auth);
      window.location.href = "/";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="h-[80px] bg-gray-950 flex items-center justify-around">
      <div className="text-white font-bold text-2xl">NIT</div>

      <div className="flex items-center gap-5">
        <div className="border border-white rounded-4xl py-2">
          <input
            autoComplete="off"
            type="search"
            className=" border-r-white focus:outline-none text-white pl-2"
            placeholder="search a course..."
          />
          <button className="text-white px-2 border-l-2 border-l-white">
            search
          </button>
        </div>

        {user ? (
          <div className="md:flex md:gap-5 hidden">
            <div className="text-white md:hidden">login</div>
            <button
            onClick={logOut}
            className="bg-blue-600 text-white p-2 px-4 rounded-4xl"
          >
            Log Out
          </button>

          
          <div>
          <div className="text-white">{name ? name : user.displayName}</div>
          <div className="text-white">{user.email}</div>
          </div>

          </div>
        ) : (
          <div className="flex gap-5">
            <Link
              to="/signup"
              className="bg-blue-600 text-white p-2 px-4 rounded-4xl"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="bg-blue-600 text-white p-2 px-4 rounded-4xl"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
