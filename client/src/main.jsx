import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useParams } from 'react-router-dom'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Error from './pages/Error.jsx';
import SingleBlog from './pages/SingleBlog.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"*",
        element:<Error/>
      },
      {
        path:"/blogs/:id",
        element:<SingleBlog/>,
        loader:({params})=>fetch(`https://blog-react-app-greeshma-server.vercel.app/blogs/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
