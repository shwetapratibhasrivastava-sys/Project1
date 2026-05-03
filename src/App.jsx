import React from 'react'
import Homepage from './Pages/Home/Homepage'
import Navbar from '../components/Header/Navbar'
import Footerpage from '../components/Footer/Footerpage'
import ContactForm from './components/ui/ContactForm'

const App = () => {
  return (
    <><Navbar/>
    <Homepage/>
    <ContactForm/>
    <Footerpage/></>
  )
}

export default App