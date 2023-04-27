import { useForm } from 'react-hook-form'
import { useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './Login.module.scss'
import { TLoginForm } from '../../types'
import PrimaryButton from '../../../../../shared/components/buttons/PrimaryButton/PrimaryButton'
import PrimaryLayout from '../../../../../../../todoAdvanced/src/layout/primaryLayout/components/primaryLayout/PrimaryLayout'
import CustomInput from "../../../../../shared/components/formControls/CustomInput/CustomInput.tsx"
import {useValidationRules} from "../../../../../shared/hooks/useValidationRules.ts"
import {useNavigate} from "react-router-dom"
import {useAuthContext} from "../../../authBase"
function useFormInit() {
  return useForm<TLoginForm>({
    defaultValues: {
      name: '',
      password: ''
    }
  })
}
function useOnSubmit() {
  const {setAuthData} = useAuthContext()
  const navigate = useNavigate()
  return useCallback((data: TLoginForm) => {
    setAuthData({...data, id: uuidv4()})
    navigate('/')
  }, [])
}

const Login = () => {
  const useFormReturn = useFormInit()
  const onSubmit = useOnSubmit()
  const {requiredRule, passwordValidation} = useValidationRules()

  const { handleSubmit, control } = useFormReturn

  return (
    <PrimaryLayout>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          label="Name"
          name="name"
          control={control}
          rules={{
            required: requiredRule()
          }}
        />
        <CustomInput
          label="Password"
          name="password"
          type="password"
          control={control}
          rules={{
            required: requiredRule(),
            validate: value =>  passwordValidation(value)
          }}
        />
        <PrimaryButton className={styles.button} type="submit" text="Login"/>
      </form>
    </PrimaryLayout>
  )
}

export default Login
