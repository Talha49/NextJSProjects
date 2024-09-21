import Navbar from '@/app/ui/Dashboard/Navbar/Navbar'
import Sidebar from '@/app/ui/Dashboard/Sidebar/Sidebar'
import React from 'react'
import styles from '@/app/ui/Dashboard/dashboard.module.css'


const layout = ({children}) => {
  return (
    <div className={styles.container}>

        <div className={styles.menu}>
            <Sidebar />
        </div>
        <div className={styles.content}>
            <Navbar/>
            {children}
        </div>
    </div>
  )
}

export default layout