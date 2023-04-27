import PrimaryButton from "../../../../shared/components/buttons/PrimaryButton/PrimaryButton.tsx"
import styles from "../Header/Header.module.scss"
import PlusIcon from "../../../../shared/icons/PlusIcon.tsx"
import TaskModal from "../TaskModal/TaskModal.tsx"
import {useState} from "react"

const NewTask = ()=>{
  const [isModal, setIsModal] = useState(false)
  return(
    <>
      <TaskModal isOpen={isModal} close={()=>setIsModal(false)}/>
      <PrimaryButton onClick={()=> setIsModal(true)}>
        <div className={styles.iconWrapper}>
          <PlusIcon width={24} height={24}/>
        </div>
        Add
      </PrimaryButton>
    </>
  )
}
export default NewTask
