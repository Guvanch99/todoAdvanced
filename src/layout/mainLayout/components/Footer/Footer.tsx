import styles from './Footer.module.scss'
import InnerLayout from '../Inner/InnerLayout'
import {memo} from "react"

const Footer = () => (
  <InnerLayout borderTopLine contentClass={styles.innerContent}>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()}, localhost.com. All rights reserved.
        </p>
      </div>
    </div>
  </InnerLayout>

)

export default memo(Footer)
