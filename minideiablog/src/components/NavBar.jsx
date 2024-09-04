import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.brand}>
            Ideia<span>App</span>
        </div>
        <ul className={styles.links_list}>
          <li>
            <a href="#" className={({isActive}) =>( isActive ? styles.active : null)}>Home</a>
          </li>
          <li>
            <a href="#" className={({isActive}) =>( isActive ? styles.active : null)}>Login</a>
          </li>
          <li>
            <a href="#" className={({isActive}) =>( isActive ? styles.active : null)}>Register</a>
          </li>
          <li>
            <a href="#" className={({isActive}) =>( isActive ? styles.active : null)}>New Post</a>
          </li>
          <li>
            <a href="#" className={({isActive}) =>( isActive ? styles.active : null)}>About</a>
          </li>
          <li>
            <a href="#" className={({isActive}) =>( isActive ? styles.active : null)}>Exit</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar