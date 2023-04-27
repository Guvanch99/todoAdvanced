import styles from './TaskManager.module.scss'

import PrimaryLayout from "../../../../layout/primaryLayout/components/primaryLayout/PrimaryLayout.tsx"
import {useTaskManagerContext} from "../../state/useTaskManagerState.ts"
import QueueTask from "../QueueTask/QueueTask.tsx"
import ProgressTask from "../ProgressTask/ProgressTask.tsx"
import CompletedTask from "../CompletedTask/CompletedTask.tsx"

const TaskManager = ()=>{
  useTaskManagerContext()
  return(
    <PrimaryLayout maxHeight size="large" header="">
      <div className={styles.wrapper}>
        <QueueTask/>
        <ProgressTask/>
        <CompletedTask/>
      </div>
    </PrimaryLayout>
  )
}

export default TaskManager
