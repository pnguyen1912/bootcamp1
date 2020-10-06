import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
export default function User (props){
        // props.peopleArray = []
    const [display,setDisplay] = React.useState('')

    useEffect(()=>{
        let currentDisplay = props.peopleArray[props.peopleArray.length -1]
        setDisplay(currentDisplay)
    },[props.peopleArray])

    return(
        <div>
        <h2>User {props.name}</h2>
        {props.peopleArray.length === 0 ? (
            <h4>No one, <Link to='/add'>please add</Link></h4>
        ):(
            <div>
        {props.peopleArray.map(item => <button onClick={()=>setDisplay(item)} >{item.fullName}</button>)}
            
{display && (
    <div>
          <h4>Name: {display.fullName}</h4>
            <h4>Home Town: {display.homeTown}</h4>
            <h4>Fav Code: {display.favCode}</h4>
            <h4>Fact: {display.fact}</h4>
        </div>
)}
          
   
    </div>
        )
        }
        </div>
    )
}