import React from 'react'
import { useLocation } from 'react-router-dom'
import SingleCourse from './SingleCourse'
import Enroll from './Enroll'

function Details() {
    const location = useLocation()
    const course = location.state
  return (
    <div className='bg-gray-800'>
        <div className='h-[150px] bg-blue-600 text-white font-bold text-4xl flex items-center pl-5'>
            {course.title}
        </div>

        <div className=' p-4 w-3/4 flex flex-col gap-5'>
          

<h1 className='text-green-400 text-xl font-bold '>Description</h1>
            <h1 className='font-medium text-white'>starts from {course.start}</h1>
            <p className='text-white text-lg font-bold pr-5 text-justify'
            style={{ whiteSpace: "pre-line" }}
            >{course.desc}</p>


            <div  className='absolute right-0'>
            <Enroll image={course.image} price={course.price} off={course.off} />
            </div>
            

<h1 className='text-green-400 text-xl font-bold '>Syllabus</h1>

<p className='text-white text-lg font-bold'
            style={{ whiteSpace: "pre-line" }}
            >{course.syllabus}</p>
        </div>

      
    </div>
  )
}

export default Details