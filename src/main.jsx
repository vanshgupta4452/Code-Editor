import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import App from './routes/App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { store } from './store/store'
import { Provider } from 'react-redux'
import Home from './components/home.jsx'
import Paste from './components/Paste.jsx'
import { ToastContainer } from 'react-toastify'
import View from './components/view.jsx'


const router=createBrowserRouter([
  {path:"/",element:<App/>, children:[{path:"/",element:<Home/>},
  {path:"/paste",element:<Paste/>},
  {path:"/view",element:<View/>},
  // {path:"/login",element:<Login/>},
  ]},

])

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <RouterProvider router={router}/> 
      <ToastContainer />
   </Provider>,
  
 
)
