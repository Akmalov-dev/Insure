import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutPage from './pages/AboutPage/Aboutpage'
import HomePage from './pages/homePage/homepage'
import ContactPage from './pages/ConstactPage/contactpage'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Layout from './components/layout/layout'


function App() {
  return (
    <>
        <BrowserRouter>
         <Routes>
              <Route element={<Layout/>}>
                <Route path='home' element={<HomePage/>}/> 
                <Route path='about' element={<AboutPage/>}/>
                <Route path='contact' element={<ContactPage/>}/>
              </Route>
         </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
