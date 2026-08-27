import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Routers from './routers'
import Menu from './menu'



const App = () => {
  return (
   <>

   <BrowserRouter>
   <Menu/>
   <Routers/>
   </BrowserRouter>
   </>
  )
}

export default App
