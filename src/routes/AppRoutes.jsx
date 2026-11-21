import { useRoutes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import ProductDetails from '../components/ProductDetails'



function AppRoutes() {
    const routes=useRoutes([
{path:'/' , element:<MainLayout/> , children:[
    {index:true , element:<Home/>},
    {path:'productdetails/:details' , element:<ProductDetails/>}
]}
    ])
  return routes
}

export default AppRoutes
