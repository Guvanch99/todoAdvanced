import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from "./Routes.tsx"
import {AuthProvider} from "./feature/auth/authBase"
import './shared/styles/_reset.scss'

const App = ()=>
  <AuthProvider>
    <Routes/>
  </AuthProvider>


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
