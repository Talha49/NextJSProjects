import React from 'react'
import Image from 'next/image'
import styles from  './sidebar.module.css'
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from './MenuLink/menuLink';
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/Dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/Dashboard/Users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/Dashboard/Products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/Dashboard/Transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/Dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/Dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/Dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/Dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/Dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className={styles.container}>
 
     <div className={styles.user}>
      <Image className={styles.userImage} src="/noavatar.png" width="50" height="50"  />
      <div className={styles.userDetails}>
        <span className={styles.userName}>Talha Ghauri</span>
        <span className={styles.userTitle}>Web Engineer</span>
      </div>
     </div>
      <ul className={styles.list}>
             {
              menuItems.map((cat) => (
                <li key={cat.title}>

                  <span className={styles.cat}>{cat.title}</span>
               {
                cat.list.map((item) => (

                   <MenuLink  item={item} key={item.title} />
                ))  
               }
           

                </li>
              ))
             }
      </ul>
    </div>
  )
}

export default Sidebar