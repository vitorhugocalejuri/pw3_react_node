import styles from './Post.module.css'
import { useFetchDocument } from '../../hooks/useFetchDocuments'
import {  } from '/react-router-dom'

const Post = () => {
    const { id } = useParams()
    const { document: post } = useFetchDocument("posts", id)
  return (
    <>
    <div>
    (post &&
     <>
     
     </>
    )
    </div>
    </>
  )
}

export default Post