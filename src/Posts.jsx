import { Link } from "react-router-dom"

const Posts= ({posts}) => {
    return (
      <div className="theposts">
        <h1>Posts</h1>
        <ul>
          {
            posts.map((post) => {
              return (
                <li key={post.id}>
                  <Link to={`/posts/${post.id}`}> 
                     {post.id} {post.title}
                   </Link>  
                    
                </li>

              )
            })
          }
        </ul>
      </div>
    )
  }

export default Posts