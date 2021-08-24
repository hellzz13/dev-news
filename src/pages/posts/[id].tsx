import { useRouter } from "next/router"

const Post = () => {
    const router = useRouter();
    return (
      <>
      <h1>Post {router.query.id}</h1>
      <p>{router.asPath}</p>
      </>
    )
  }
  
  export default Post
   
  