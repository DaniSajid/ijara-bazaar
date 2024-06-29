import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComp from './components/footer/FooterComp'
import HeaderComp from './components/header/HeaderComp'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'

function App() {

  return (
    <>
    <BrowserRouter>
<HeaderComp/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
    </Routes>
<FooterComp/>
</BrowserRouter>
    </>
  )
}

export default App
