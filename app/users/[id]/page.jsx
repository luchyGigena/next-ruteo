



async function fetchUserId(id){
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const respuesta = await res.json()
    return respuesta.data
  }

export default async function UserPage({params}){
    console.log(params)
  const user = await fetchUserId(params.id)

    return(
        <div className="bg-slate-400 p-10 rounded-md ">
            <img src={user.avatar} alt="" className="m-auto my-4"/>
            <h1 className="text-3xl font-bold">{user.id} - {user.first_name} - {user.last_name}</h1>
            <p>email: {user.email}</p>
        </div>
    )
}