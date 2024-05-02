import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Router/Route'

 export const globalContextAPI = createContext()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <globalContextAPI.Provider value={{name:'Shajib'}}>
     <RouterProvider router={myCreatedRoute}></RouterProvider>
     </globalContextAPI.Provider>
  </React.StrictMode>,
)
