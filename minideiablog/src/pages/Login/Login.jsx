import React from 'react'
import styles from '.Login.modules.css'
import { useAuthentication } from '../../hooks/useAuthentication'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = setState();
    const [password, setPassword] = setState();
    const [error, setError] = setState();
  return (
    <div>Login</div>
  )
}

export default Login