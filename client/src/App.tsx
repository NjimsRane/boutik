import {
    createBrowserRouter,
    RouterProvider, 
    Outlet
} from 'react-router-dom'
import { Accessories, Contact, Home, Products, Shop } from './pages'
import { Footer, Header } from './layouts'


const App = () => {

  const Layout = ()=>{
    return(
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:<Layout />,
        children:[
          {
            path:'/',
           element:<Home />
          },
          {
            path:'/shop',
           element:<Shop />
          },
          {
            path:'/contact',
           element:<Contact />
          },
          {
            path:'/products',
           element:<Products />
          },
          {
            path:'/accessories',
           element:<Accessories />
          },
          // {
          //   path:'/error',
          //  element:<Er />
          // },
        ]
      }
      
    ]
  )



  return (
    <div>
      <RouterProvider router={ router} />
    </div>
  )
}

export default App