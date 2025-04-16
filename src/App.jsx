import { useState } from 'react'
import './App.css'
import SignUp from './auth/SignUp'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SignIn from './auth/SignIn'
import Layout from './Layout'
import Details from './Details'
import EnrollForm from './EnrollForm'

function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
<Layout>
        <Routes>
         
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/enrollform' element={<EnrollForm />} />
          
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
