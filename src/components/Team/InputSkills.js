import React, {useState}  from 'react'

import { Link } from 'react-router-dom'
import {skills} from './SkillsData'
import { Multiselect } from 'multiselect-react-dropdown';
import Select from 'react-select'


const InputSkills = () => {
    const padding = {
        paddingRight: 5,
      }
    const levels=[
        { label: 'Beginner', value: 'Beginner' },
        { label: 'Intermediate', value: 'Intermediate' },
        { label: 'Advance', navalueme: 'Advance' },
      
    ];
    const [level]=useState(levels);
    const [skill]=useState(skills);
   
    return (
      <>
            <form>
                    <h2>Select Level Of Projects</h2>
                    <Select options={levels} displayValue="name" placeholder="level" />

                    <h2>Select Skills</h2>
                    <Multiselect options={skill} displayValue="name"  placeholder="select your top 3 skills"/>
                    <Link style={padding} to='/teamList'>
                    <button type="submit" className="btn">
                    Submit
                    </button>
                     </Link>
            </form>
       </>
    )
}

export default InputSkills