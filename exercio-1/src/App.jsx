import { useState } from 'react'
import './App.css'
import Card from './card/card'
import Nav from './nav/nav'

const product = [
  {
      title: 'PC MUITO CARO',
      image: 'https://images.tcdn.com.br/img/img_prod/1103247/pc_gamer_intel_i9_rtx_4090_64gb_ddr5_2tb_m_2_75_2_66a7af6d87089adf7c250f57b43191c0.jpg',
      marca: 'PC CAROS',
      preco: '52.900',
    }
    
]



function App() {

  return (
    <>
      <Nav/>

      <Card/>

      
    </>      
    
  )
}

export default App
