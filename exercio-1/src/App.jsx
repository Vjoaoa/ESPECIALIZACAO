import { useState } from 'react'
import './App.css'
import Card from './card/card'
import { Route , BrowserRouter, Routes } from 'react-router-dom'
import Details from './details'
import Login from './loguin'
import MyProvider from "./contexts/MyContext";
import Layout from './layout'

function App() {

  return (
   <BrowserRouter>
    <MyProvider>
  
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Layout/>}>
              <Route path="/" element={<Card />} />
              
            </Route>
            <Route path="/product/:id" element={<Details />} />
            {/* <Route path="*" element={<>
              <h1>nao existe</h1>
            </>}/> */}
        </Routes>

      </MyProvider>
   </BrowserRouter>     
  )
}

export default App
