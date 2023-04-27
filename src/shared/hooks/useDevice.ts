import { useMedia } from 'react-use'

export function useTablet() {
  return useMedia('(max-width: 767px)')
}

export function useMobile() {
  return useMedia('(max-width: 577px)')
}
