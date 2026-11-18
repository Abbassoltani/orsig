import { useRoutes } from 'react-router-dom'
import MainLayout from '../layout/mainLayout'
import Home from '../pages/Home'


function AppRoutes() {
    const routes=useRoutes([
{path:'/' , element:<MainLayout/> , children:[
    {index:true , element:<Home/>}
]}
    ])
  return routes
}

export default AppRoutes
