import { Routes, Route } from 'react-router'
import {  ROUTE_PATHS } from '@/routes/routes'
import PublicRoutes from './public-routes'


//Public Routes
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import SignIn from '@/pages/SignIn'


const AppRouter = () => {
  return (
     <Routes>
        <Route element={<PublicRoutes />}>
          <Route path={ROUTE_PATHS.PUBLIC.REGISTER} element={<h1>Hola</h1>}/>
        <Route path={ROUTE_PATHS.PUBLIC.LOGIN} element={<SignIn/>}/>
        </Route>


        <Route path={ROUTE_PATHS.PUBLIC.HOME} element={<Home/>}/>
        <Route path={ROUTE_PATHS.PUBLIC.PROFILE} element={<Profile/>}/>
        
        {/*Auth Routes*/}
     </Routes>
  )
}

export default AppRouter