import React from 'react'

const Team = (props) => {
    const {Pname,Tsize,Vacant_Size,Tech_Stacks,Pdesc}=props.team;

    return (
        <div>
            <section className="Project__details">
                <h4>Project Name:{Pname}</h4>
                <h4>Team Size:{Tsize}</h4>
                <h4>Vacant seat:{Vacant_Size}</h4>
                <h4>Tech Stacks Used:{Tech_Stacks}</h4>
                <h4>Project Description:{Pdesc}</h4>
            </section>
    
        </div>
    )
}

export default Team
