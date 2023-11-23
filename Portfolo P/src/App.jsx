
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'
import Footer from './Components/Footer/Footer'
import Apis from './Pages/Homepage/Apis/Apis'
import StyleP from './Pages/StyleP/StyleP'
import Contact from './Pages/Homepage/Contact/Contact'


function App() {
  return(
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/apiwork" element={<Apis />}/>
  <Route path="/styleWork" element={<StyleP />}/>
  <Route path="/contact" element={<Contact />}/>
</Routes>
<Footer/>
</BrowserRouter>

 
)}

export default App
