import { useParams, Link} from "react-router-dom"

const SingleUser = ({users}) => {
const params = useParams()
const id = params.id*1

const user = users.find((user) => {
    return user.id === id

})

if(!user){
    return null
}


return (

<div>
    <h1>{user.name} <br></br>{user.username}
    {user.website}<br></br>{user.company.name}
    <br></br>{user.phone}</h1>
    <h1>"{user.company.catchPhrase}"</h1>
    <Link to='/users'>Back to Users</Link>


</div>

)
}

export default SingleUser