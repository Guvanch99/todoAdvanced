import {FC, memo} from "react"
import {Control} from "react-hook-form"
import CustomSelectControl from "../../formControls/CustomSelect/CustomSelectControl/CustomSelectControl.tsx"

const options = [
  {
    value: '0',
    label:'Queue'
  },
  {
    value: '1',
    label:'Progress'
  },
  {
    value: '2',
    label:'Completed'
  }
]

type TProps = {
  control: Control<any>
}
const StatusSelect: FC<TProps> = ({control})=>(
  <CustomSelectControl
    control={control}
    options={options}
    isRequired
    name="status"
    label={`Status *`}
    placeholder="Status"
    handleError={(error) => error?.status}
  />
)

export default memo(StatusSelect)
