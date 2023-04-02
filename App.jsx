import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Episodios } from './pages/Episodios/Episodios';
import { Galeria } from './pages/Galeria/Galeria';
import  { Inicio }  from './pages/Inicio/Inicio';
import img from './assets/img.png'

import './App.css'

function App() {
  
  return (


    
    <BrowserRouter>
    <Inicio/>
    <Routes>
      <Route path="/" element={<Inicio />}/>
      <Route path="/galeria" element={<Galeria />}/>
      <Route path="/episodios" element={<Episodios />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App


