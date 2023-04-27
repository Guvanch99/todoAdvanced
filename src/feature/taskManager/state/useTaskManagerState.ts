import constate from "constate"
import {useLocalStorage} from "react-use"
import {TTask} from "../types.ts"
import {TASK_LOCAL_STORAGE_KEY} from "../../../shared/constants/localeStorage.ts"


const useTaskManagerState = ()=>{
  const [tasks, setTasks, removeTasks] = useLocalStorage<TTask[]>(TASK_LOCAL_STORAGE_KEY)

  return{
    tasks,
    setTasks,
    removeTasks
  }
}

export const [TaskMangerProvider, useTaskManagerContext] = constate(useTaskManagerState)
