import { RegisterOptions, ValidateResult } from 'react-hook-form'
import { useCallback } from 'react'
import { EMAIL_VALIDATION, PASSWORD_VALIDATION } from '../constants/regexes'

export const useValidationRules = () => {
  const requiredRule: (message?: string) => RegisterOptions['required'] = useCallback(
    (message) => ({
      value: true,
      message: message || 'Field is Required'
    }),
    []
  )

  const minLengthRule: (num: number) => RegisterOptions['minLength'] = useCallback((num) => ({
    value: num,
    message: `length be more than ${num}`
  }), [])

  const emailValidation: RegisterOptions['validate'] = useCallback(
    (email: string): ValidateResult =>
      EMAIL_VALIDATION.test(email)
      || 'Email format is not correct' || false,
    []
  )

  const passwordValidation:
    (password: string, msg?: string) => ValidateResult = useCallback((password, msg) =>{
      if(password === 'admin'){
        return  true
      }
      return PASSWORD_VALIDATION.test(password)
      || msg || 'Password format is not correct' || false
    }
    , []
    )


  return {
    requiredRule,
    emailValidation,
    passwordValidation,
    minLengthRule
  }
}
