import {
    createBrowserRouter,
    RouterProvider, 
    Outlet
} from 'react-router-dom'
import { Accessories, Contact, Home, Products, Shop ,Blog, ErrorPage } from './pages'
import { Footer, Header, Services } from './layouts'


const App = () => {

  const Layout = ()=>{
    return(
      <>
        <Header />
        <Outlet />
        <Services />
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
          {
            path:'/blog',
           element:<Blog />
          },
          // {
          //   path:'/error',
          //  element:<Er />
          // },
        ]
      },
      {
        path:'*',
        element:<ErrorPage />
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