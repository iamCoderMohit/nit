import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { auth, googleProvider } from '../firbase/firebase'

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toast.success('Logged in successfully', {position: 'top-center'})
            window.location.href = '/'
        } catch (error) {
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
        type="email" placeholder='Enter registred email...'
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        autoComplete='off' 
        className='border border-white text-white rounded-lg p-2'
        type="password" placeholder='Enter password...'
        onChange={(e) => setPassword(e.target.value)}
        />

        <button
        onClick={handleLogin}
        className='bg-blue-600 text-white rounded-lg cursor-pointer p-2'>Login</button>
         <button
        onClick={signUpWithGoogle}
        className='bg-blue-600 text-white rounded-lg cursor-pointer p-2'>Sign In With Google</button>
    </div>
    </div>
  )
}

export default SignIn