import Home from "/@/pages/home/Home";
import Login from '/@/pages/auth/Login';
import Layout from "/@/layout/Layout";

const menus = [
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:'home',
        element: <Home/>
      }
    ]
  },
  {
    path:'/login',
    element: <Login/>
  }
]

export default menus