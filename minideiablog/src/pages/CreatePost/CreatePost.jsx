import { useState } from "react"
import style from './CreatePost.module.css'
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { useAuthValue } from '../../context/AuthContext'

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [body, setBody] = useState();
  const [tags, setTags] = useState();
  const [formError, setFormError] = useState();
  const { user } = useAuthValue();
  
  return (
    <>
    </>
  )
}

export default CreatePost