import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import ContactUs from './components/ContactUs.jsx';
import Users from './components/Users.jsx';
import Github from './components/Github.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact-us",
        element:<ContactUs/>
      },
      {
        path:"users/:userid",
        element:<Users/>
      },
      {
        path:"github",
        element:<Github/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>
)
