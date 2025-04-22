import { Routes, Route } from 'react-router'
import { ROUTE_PATHS } from '@/routes/routes'
import PublicRoutes from './public-routes'
import Home from '@/pages/Home'

const AppRouter = () => {
  return (
     <Routes>
        <Route element={<PublicRoutes />}>
          <Route path={ROUTE_PATHS.PUBLIC.REGISTER} element={<h1>Hola</h1>}/>
          <Route path={ROUTE_PATHS.PUBLIC.LOGIN} element={<h1>lOGIN</h1>}/>
        </Route>



        <Route path={ROUTE_PATHS.PUBLIC.HOME} element={<Home/>}/>
     </Routes>
  )
}

export default AppRouter