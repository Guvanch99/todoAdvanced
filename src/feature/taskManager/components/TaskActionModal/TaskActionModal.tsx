import {FC, useCallback, useEffect, useMemo} from "react"
import Modal from "../../../../shared/components/Modal/Modal.tsx"
import {useForm, UseFormGetValues} from "react-hook-form"
import {useTaskManagerContext} from "../../state/useTaskManagerState.ts"
import PrioritySelect from "../../../../shared/components/formFields/PrioritySelect/PrioritySelect.tsx"
import StatusSelect from "../../../../shared/components/formFields/StatusSelect/StatusSelect.tsx"
import styles from './TaskActionModal.module.scss'
import DangerousButton from "../../../../shared/components/buttons/DangerousButton/DangerousButton.tsx"
import PrimaryButton from "../../../../shared/components/buttons/PrimaryButton/PrimaryButton.tsx"

type TForm = {
  status: '0' | '1' | '2',
  priority: '0' | '1' | '2',
}
function useFormInit(id?: string){
  const {tasks} = useTaskManagerContext()
  const task = tasks?.find((task)=>task.id === id)
  const useFormReturn = useForm<TForm>({
    defaultValues: {
      status: task?.status,
      priority: task?.priority
    }
  })

  useEffect(()=>{
    if(!task){
      return
    }
    useFormReturn.reset({
      status: task.status,
      priority: task.priority
    })

  },[task])

  return useFormReturn
}

function useOnDelete(callback: () => void,id: string){
  const {tasks, setTasks} = useTaskManagerContext()
  return useCallback(()=>{
    setTasks(tasks?.filter((task)=>task.id !== id))
    callback()
  },
  [id, tasks])
}

function useOnSave(
  id: string,
  close: () => void,
  getValues: UseFormGetValues<TForm>
){
  const {tasks, setTasks} = useTaskManagerContext()
  return useCallback(()=>{
    const formData = getValues()
    setTasks(tasks?.map((task)=>{
      if(task.id === id){
        return{
          ...task,
          status: formData.status,
          priority:formData.priority
        }
      }
      return  task
    }))
    close()
  },[id, tasks])
}

type TProps = {
  id: string
  close: () => void
}
const TaskActionModal: FC<TProps> = ({id, close})=>{
  const {control, getValues} = useFormInit(id)
  const {tasks} = useTaskManagerContext()
  const task = useMemo(()=>tasks?.find((task)=>task.id === id),[id])
  const onDelete = useOnDelete(close,id)
  const onSave = useOnSave(id, close, getValues)

  return(
    <Modal isOpen={!!id} onClose={close}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{task?.title}</h1>
        <form className={styles.form}>
          <div className={styles.group}>
            <div className={styles.content}>
              <p className={styles.label}>Performer</p>
              <span className={styles.value}>{task?.author_name}</span>
            </div>
            <div className={styles.content}>
              <p className={styles.label}>Description</p>
              <span className={styles.value}>{task?.description}</span>
            </div>
          </div>
          <div className={styles.group}>
            <PrioritySelect key={id} control={control}/>
            <StatusSelect key={id} control={control}/>
          </div>
          <div className={styles.buttonGroup}>
            <DangerousButton onClick={onDelete} text="Delete"/>
            <PrimaryButton onClick={onSave} text="Save"/>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default TaskActionModal
