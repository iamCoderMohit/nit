import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db, googleProvider } from '../firbase/firebase'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

function SignUp() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userCollectionRef = collection(db, 'users')

    // const [user, loading, error] = useAuthState(auth);

    const signUp = async () => {
        try {
            const usercredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = usercredential.user
            await setDoc(doc(db, 'users', user.uid), {
                fname: fname,
                lname: lname,
                email: user.email
            })
            toast.success('registered successfully', {position: 'top-center'})
            window.location.href = '/'
        } catch (error) {
            console.log(error.message)
            toast.error(error.message, {position: 'bottom-center'})
        }
    }

    const signUpWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            window.location.href = '/'
        } catch (error) {
            console.error(error.message)
        }
    }
  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-800'>
        <div className='flex flex-col gap-3 w-[500px] p-5 shadow-2xl'>
        <input
        autoComplete='off' 
        className='border border-white text-white rounded-lg p-2'
        onChange={(e) => setFname(e.target.value)}
        type="text" placeholder='Enter first name...' />
        <input
        autoComplete='off'
        onChange={(e) => setLname(e.target.value)}
        className='border rounded-lg p-2 border-white text-white'
        type="text" placeholder='Enter last name...' />
        <input
        autoComplete='off'
        onChange={(e) => setEmail(e.target.value)}
        className='border rounded-lg p-2 border-white text-white'
        type="email" placeholder='Enter your email...' />
        <input
        autoComplete='off'
        onChange={(e) => setPassword(e.target.value)}
        className='border rounded-lg p-2 border-white text-white'
        type="password" placeholder='Create a password...'/>

        <button
        onClick={signUp}
        className='bg-blue-600 text-white rounded-lg cursor-pointer p-2'>Sign Up</button>
        <button
        onClick={signUpWithGoogle}
        className='bg-blue-600 text-white rounded-lg cursor-pointer p-2'>Sign Up With Google</button>

        <p className='text-white text-lg self-end'>already have an account <Link to={'/signin'} className='text-blue-600 font-bold cursor-pointer'>Sign in here</Link></p>
    </div>
    </div>
  )
}

export default SignUp