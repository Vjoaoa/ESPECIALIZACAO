import { useState } from 'react'
import './App.css'
import Card from './card/card'
import Nav from './nav/nav'
import { Route , BrowserRouter, Routes } from 'react-router-dom'
import Details from './details'

function App() {

  return (
   <BrowserRouter>

      <Nav/>
      <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="*" element={<>
            <h1>nao existe</h1>
          </>}/>
      </Routes>
   </BrowserRouter>     
  )
}

export default App
