
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from "./pages/Home.jsx"
import './index.css'
import Error404 from './pages/Error.jsx'
const router = createBrowserRouter(
  [

    {
      path: "/home",
      // element: <App />
      element: <Home />
    },

    {
      path: "/error",
      element: <Error404 />
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
