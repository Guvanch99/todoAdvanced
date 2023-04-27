import CustomSelectControl from "../../formControls/CustomSelect/CustomSelectControl/CustomSelectControl.tsx"
import {FC, memo, useMemo} from "react"
import {Control} from "react-hook-form"
import {useAuthContext} from "../../../../feature/auth/authBase"

const defaultPerformers = [
  {
    value: "001",
    label: "John Smith"
  },
  {
    value: "002",
    label: "Sarah Lee"
  },
  {
    value: "003",
    label: "James Wilson"
  },
  {
    value: "004",
    label: "David Taylor"
  },
  {
    value: "005",
    label: "Emma Anderson"
  },
  {
    value: "006",
    label: "Ryan Garcia"
  }
]
export function usePerformerOptions(){
  const {authData} = useAuthContext()
  return useMemo(()=>{
    if(!authData){
      return defaultPerformers
    }
    return [...defaultPerformers, {value: authData.id, label:authData.name}]
  },[authData])
}

type TProps = {
  control: Control<any>
}
const PerformerSelect: FC<TProps> = ({control})=>{
  const options = usePerformerOptions()
  return(
    <CustomSelectControl
      control={control}
      options={options}
      isRequired
      name="performer"
      label={`Performer *`}
      placeholder="Performer"
      handleError={(error) => error?.performer}
    />
  )
}

export default memo(PerformerSelect)
