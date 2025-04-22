import { Navigate, Outlet} from  'react-router'
import { ROUTE_PATHS } from './routes'
const PublicRoutes = ({ redirectPath = ROUTE_PATHS.PRIVATE.DASHBOARD }:{ redirectPath?: string}) => {
    let auth = false
    if(auth) {
        return <Navigate to={redirectPath} replace/>
    }

    return <Outlet/>
  
}

export default PublicRoutes