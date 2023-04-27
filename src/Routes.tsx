import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom'
import {Login} from "./feature/auth/login"
import {AuthGuard} from "./feature/auth/authBase"
import {MainLayout} from "./layout/mainLayout"
import {Logout} from "./feature/auth/logout"
import {Error} from "./feature/error"
import {TaskManager} from "./feature/taskManager"

const Routes = ()=>(
  <BrowserRouter>
    <RouterRoutes>
      <Route path="/"
        element={(
          <AuthGuard>
            <MainLayout />
          </AuthGuard>
        )}>
        <Route path="/" element={<TaskManager/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="*" element={<Error/>}/>
    </RouterRoutes>
  </BrowserRouter>
)


export default Routes
