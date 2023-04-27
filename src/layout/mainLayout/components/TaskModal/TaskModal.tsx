import {FC, useCallback} from "react"
import {useTaskManagerContext} from "../../../../feature/taskManager/state/useTaskManagerState.ts"
import Modal from "../../../../shared/components/Modal/Modal.tsx"
import styles from './TaskModal.module.scss'
import CustomInput from "../../../../shared/components/formControls/CustomInput/CustomInput.tsx"
import {useForm} from "react-hook-form"
import { v4 as uuidv4 } from 'uuid'
import {useValidationRules} from "../../../../shared/hooks/useValidationRules.ts"
import CustomTextArea from "../../../../shared/components/formControls/CustomTextArea/CustomTextArea.tsx"
import PerformerSelect, {
  usePerformerOptions
} from "../../../../shared/components/formFields/PerformerSelect/PerformerSelect.tsx"
import StatusSelect from "../../../../shared/components/formFields/StatusSelect/StatusSelect.tsx"
import PrioritySelect from "../../../../shared/components/formFields/PrioritySelect/PrioritySelect.tsx"
import PrimaryButton from "../../../../shared/components/buttons/PrimaryButton/PrimaryButton.tsx"
import SecondaryButton from "../../../../shared/components/buttons/SecondaryButton/SecondaryButton.tsx"

type TForm = {
  status?: '0' | '1' | '2',
  priority?: '0' | '1' | '2',
  title?: string,
  description?: string,
  performer?: string
}
function useFormInit(){
  return useForm<TForm>({
    defaultValues:{
      status:undefined,
      priority:undefined,
      title:'',
      description:'',
      performer:''
    }
  })
}

function useOnSubmit(callback: () => void){
  const options = usePerformerOptions()
  const {setTasks, tasks} = useTaskManagerContext()

  return useCallback((data: TForm)=>{
    setTasks(
      [...(tasks ?? []),
        {
          title:data.title!,
          description:data.description!,
          status:data.status!,
          priority:data.priority!,
          id:uuidv4(),
          author_name:options
            .find(option=>option.value === data.performer)?.label || '',
          schedule:{
            creation_time:new Date()
          }
        }])
    callback()
  },[tasks])
}

type TProps = {
  isOpen: boolean
  close: () => void
}
const TaskModal: FC<TProps> = ({isOpen, close})=>{
  const {requiredRule} = useValidationRules()
  const {control, handleSubmit, reset} = useFormInit()
  const onSubmit = useOnSubmit(()=>{
    reset()
    close()
  })
  return(
    <Modal isOpen={isOpen} onClose={close}>
      <div className={styles.wrapper}>
        <h1 className={styles.label}>New Task</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className={styles.divider}>
              <CustomInput
                name="title"
                control={control}
                label="Title *"
                rules={{required:requiredRule()}}
              />
              <PerformerSelect control={control}/>
            </div>
            <div className={styles.divider}>
              <StatusSelect control={control}/>
              <PrioritySelect control={control}/>
            </div>
            <div className={styles.textarea}>
              <CustomTextArea
                rules={{required:requiredRule()}}
                control={control}
                label="Description"
                name="description"/>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <PrimaryButton type="submit" text="Save"/>
            <SecondaryButton onClick={close} text="Cancel"/>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default TaskModal
