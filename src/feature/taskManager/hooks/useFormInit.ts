import {useForm} from "react-hook-form"

type TForm = {
  sort?: 'UP' | 'DOWN'
}
export function useFormInit(){
  return useForm<TForm>({
    defaultValues:{}
  })
}
