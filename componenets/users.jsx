'use client'
import Link from "next/link"



export default function Users({users}){
    return(
        <ul>
        {
          users.map(u =>(
            <Link key={u.id} href={`/users/${u.id}`}>
            <li key={u.id} >
              <div>
                <h5 className="font-bold">{u.id} - {u.first_name} {u.last_name}</h5>
                <p>email: {u.email}</p>
             
              </div>
              <img src={u.avatar} alt ='' className="rounded-full w-20" />
            </li>
            </Link>
          ))
        }
      </ul>
    )
}