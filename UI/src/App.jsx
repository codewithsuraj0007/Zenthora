import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Routers from './CommonRouters'
import ProtectedRouters from './ProtectedRouters'
import Menu from './menu'



const App = () => {
  return (
   <>

   <BrowserRouter>
   <Menu/>
   <Routers/>
   <ProtectedRouters/>
   </BrowserRouter>
   </>
  )
}

export default App
