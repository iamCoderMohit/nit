import React from 'react'
import { Link } from 'react-router-dom'

function Enroll({
    id,
    image,
    title,
    price,
    off,
    start,
  
    syllabus,
    desc
}) {
  return (
    <div className="w-[400px] h-[400px] bg-gray-950 rounded-2xl flex flex-col items-around justify-between shadow shadow-amber-50">
    <div
      className="w-full h-[40%] bg-red-100 bg-cover bg-center rounded-tr-2xl rounded-tl-2xl"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div className="flex flex-col items-center justify-center gap-5 grow p-2" >

      <div className="text-orange-300 font-medium self-start pl-4">Price : </div>

      <div className="flex justify-around items-center w-full  rounded-2xl">
       
        
        <div className="text-white text-xl font-bold">₹{price}</div>
        
        <div className="text-green-400 font-bold">{off}% off</div>
      </div>
      <Link to={'/enrollform'} className="bg-blue-600 text-center text-white font-medium rounded-2xl cursor-pointer p-2 w-full"
      state={{id, image, title, price, off, start, syllabus, desc}}
      >
        Enroll Now
      </Link>
    </div>
  </div>
  )
}

export default Enroll