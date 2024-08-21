import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>
                Ideia <span>App</span>
            </li>
            <li>
                <a href='#'>Home</a>
            </li>
            <li>
                <a href="#"> Login</a>
            </li>
            <li>
                <a href="#"> Resgister</a>
            </li>
            <li>
                <a href="#"> New Post</a>
            </li>
            <li>
                <a href="#"> About</a>
            </li>
            <li>
                <a href="#"> Exit</a>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
