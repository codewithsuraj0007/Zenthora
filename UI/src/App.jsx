import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Routers from './CommonRouters'
import ProtectedRouters from './ProtectedRouters'
import Menu from './menu'
import Menuconfige from './menuConfige/menuconfige'




const App = () => {
  return (
   <>
   <BrowserRouter>
   <Menuconfige/>
   <ProtectedRouters/>
   </BrowserRouter>
   </>
  )
}

export default App
