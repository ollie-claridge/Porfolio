
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'
import Footer from './Components/Footer/Footer'
import Apis from './Pages/Homepage/Apis/Apis'


function App() {
  return(
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/apiwork" element={<Apis />}/>

  
  
</Routes>
<Footer/>
</BrowserRouter>

 
)}

export default App
