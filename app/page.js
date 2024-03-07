import Users from "@/componenets/users"



async function fetchUser(){
  const res = await fetch('https://reqres.in/api/users')
  const respuesta = await res.json()
  return respuesta.data
}

export default async function Home() {
  const users = await fetchUser()
  console.log(users)

  return (
    <Users users={users} className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between"/>
  );
}
