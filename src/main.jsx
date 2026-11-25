import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter ,RouterProvider } from 'react-router'
import { AllData } from './Data/AllData.jsx'
import AllCart from './Cart/AllCart.jsx'
import ScrollToTop from 'react-scroll-to-top'




var router = createBrowserRouter([

    {
        path:"/",
element:<App/>
    },

    {
        path:"cart",
element:<AllCart/>
    },

])


createRoot(document.getElementById('root')).render(
    <AllData>
<ScrollToTop smooth />
<RouterProvider router={router}/>

    </AllData>

)
