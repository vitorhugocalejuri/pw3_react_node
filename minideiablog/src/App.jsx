import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CreatePost from './pages/CreatePost/CreatePost'

function App() {
  return (
    <>
      <div>
        <NavBar/>
        <CreatePost />
        <Footer/>
      </div>
    </>
  )
}

export default App
