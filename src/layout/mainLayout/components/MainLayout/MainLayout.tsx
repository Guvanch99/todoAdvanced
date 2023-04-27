import  { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import styles from './MainLayout.module.scss'
import Footer from '../Footer/Footer'
import { TaskMangerProvider } from "../../../../feature/taskManager"

const MainLayout: FC = () => (
  <div className={styles.wrapper}>
    <Header/>
    <div className={styles.content}>
      <div className={styles.outlet}>
        <Outlet/>
      </div>
    </div>
    <Footer/>
  </div>
)

export default () => (
  <TaskMangerProvider>
    <MainLayout/>
  </TaskMangerProvider>
)
