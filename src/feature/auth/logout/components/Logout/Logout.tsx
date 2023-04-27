import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../../authBase'

function useLogout() {
  const { removeAuthData } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    removeAuthData()
    navigate('/login')
  }, [])
}

const Logout = () => {
  useLogout()
  return null
}
export default Logout
