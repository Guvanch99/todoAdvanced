import constate from 'constate'
import { useLocalStorage } from 'react-use'
import { TAuthData } from '../types'
import { AUTH_LOCAL_STORAGE_KEY } from '../../../../shared/constants/localeStorage'

const useAuthState = () => {
  const [authData, setAuthData, removeAuthData] = useLocalStorage<TAuthData>(AUTH_LOCAL_STORAGE_KEY)
  return {
    authData,
    setAuthData,
    removeAuthData
  }
}

export const [AuthProvider, useAuthContext] = constate(useAuthState)
