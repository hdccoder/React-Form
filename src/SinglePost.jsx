import { useParams, Link } from "react-router-dom"

const SinglePost = ({posts}) => {

    const params = useParams()
    const id = params.id*1

    const post = posts.find((post) => {
        return post.id === id
    })

if (!post){
    return null
}

    return (
   
   <div>

    <h1>{post.body}</h1>
    <Link to='/posts'> Return to All Post</Link>

    </div>
)

}

export default SinglePost