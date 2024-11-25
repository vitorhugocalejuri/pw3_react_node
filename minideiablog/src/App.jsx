import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthentication } from './hooks/useAuthentication'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import CreatePost from './pages/CreatePost/CreatePost'
import Register from './pages/Register/Register'
import Post from './pages/Post/Post'
import loading from '/loading.gif'
import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <div className='container load'><img src={loading} alt="Loading Image IdeiaBlog" width="120px" height="120px" /></div>
  }
  return (
    <>
      <AuthProvider value={{ user }}>
        <div>
          <BrowserRouter>
            <NavBar />
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/post/create' element={<CreatePost />}></Route>
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </div>
      </AuthProvider>
    </>
  )
}

export default App