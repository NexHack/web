import React from 'react'
import Team from './Team'
import { Link } from 'react-router-dom'

const teams=[
    {
        Pname:"Chat App",
        Tsize:3,
        Vacant_Size:2,
        Tech_Stacks:["Node","React"],
        Pdesc:"real time chatting app"

    },
    {
        Pname:"Food Ordering App",
        Tsize:3,
        Vacant_Size:2,
        Tech_Stacks:["Node","React"],
        Pdesc:"real time chatting app"

    },
    {
        Pname:"Ecommerce App",
        Tsize:3,
        Vacant_Size:2,
        Tech_Stacks:["Node","React"],
        Pdesc:"real time chatting app"

    }
  ];
const TeamList = () => {
    const padding = {
        paddingRight: 5,
      }
         return (
        <div>
            <div className="projects__list">
                { 
                    teams.map((team)=>{
                    return <Team team={team} />
                })}
            </div>
            <Link style={padding} to='/newTeam'>
            <div>Create New Team</div>
            </Link>
        </div>
    )
}

export default TeamList