import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from './firbase/firebase'
import { toast } from 'react-toastify'

function EnrollForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState(0)
    const [course, setCourse] = useState('web dev course')

    const enrollref = collection(db, 'enrolled')

    const addStudent = async (e) => {
        e.preventDefault()
        try {
            await addDoc(enrollref, {
                email: email,
                name: name,
                mobno: number,
                course: course
            })

            window.location.href = '/'
            toast.success('registerd successfully', {position: 'top-center'})
        } catch (error) {
            console.log(error.message)
            toast.error(error.message, {position: 'bottom-center'})
        }
    }
  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-800'>
        <form onSubmit={addStudent} className='flex flex-col gap-3 w-[500px] p-5 shadow-2xl'>
        <input
        autoComplete='off' 
        className='border border-white text-white rounded-lg p-2'
        type="email" placeholder='Enter registred email...'
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <input
        autoComplete='off' 
        className='border border-white text-white rounded-lg p-2'
        type="text" placeholder='Enter Full Name...'
        onChange={(e) => setName(e.target.value)}
        required
        />
        <input
        autoComplete='off' 
        className='border border-white text-white rounded-lg p-2'
        type="number" placeholder='Enter Mobile Number...'
        onChange={(e) => setNumber(e.target.value)}
        required
        />

        <select className='border border-white rounded-lg p-2 text-black bg-amber-50' name="" id="" onChange={(e) => setCourse(e.target.value)} required>
            <option value="web dev course">Web Dev Course</option>
            <option value="data science course">Data Science Course</option>
        </select>

         <button type='submit'
        className='bg-blue-600 text-white rounded-lg cursor-pointer p-2'>Register</button>
    </form>
    </div>
  )
}

export default EnrollForm