import React from 'react'
import Homepage from './Pages/Home/Homepage'
import MainLayout from '../components/Layout/MainLayout'
import { Route,Routes } from 'react-router-dom'
import { Home } from 'lucide-react'

const App = () => {
  return (
    <>    
    <div className='bg-blue-950 min-h-screen text-white'>

      <Routes>
       <Route path='/' element={<MainLayout/>}>
       <Route index element={<Homepage/>}/>
       </Route>
      </Routes>
  
      </div>
</>
    
  )
}

export default App