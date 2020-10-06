import React from 'react'
import { useHistory,Link } from "react-router-dom";
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
export default function Add (props){
    const history = useHistory();

    // props.peopleArray = []
    // props.setPeopleArray = function
    const [fullName,setFullName]= React.useState('')
    const [homeTown,setHomeTown]= React.useState('')
    const [favCode,setFavCode]= React.useState('')
    const [fact,setFact]= React.useState('')
    const [err,setErr] = React.useState('')
    return(
        <div>
    <h2>Add {props.name}</h2>

        <h3>Full name</h3>
    <input value={fullName} onChange={e=>setFullName(e.target.value)} />
        <h3>Hometown</h3>
    <input value={homeTown} onChange={e=>setHomeTown(e.target.value)} />
    <h3>Coding Language</h3>
    <select value={favCode} onChange={e=>setFavCode(e.target.value)} >
        <option disabled value=''>Select</option>
        <option value='js'>JS</option>
        <option value='react'>React</option>
        <option value='angular'>Angular</option>
        <option value='vue'>Vue</option>
    </select>
    <h3>Fact</h3>
    <textarea value={fact} onChange={e=>setFact(e.target.value)}  /><br />
    <button onClick={()=>{
        if (fullName !== '' && favCode !== ''){
            if (props.peopleArray.find(i=>i.fullName === fullName)){
                setErr('User already exist')
            } else {
        let newPerson = {
             fullName,
             homeTown,
            favCode,
           fact
        }
        let newPeopleArray = [...props.peopleArray]
        newPeopleArray.push(newPerson)
        props.setPeopleArray(newPeopleArray)
        let postPerson = {
            name: fullName,
            homeTown,
           favCode,
          fact
       }
        axios({
            method: 'post',
            url: 'https://5f7bab5e00bd740016909c7f.mockapi.io/tier1',
            data: postPerson
        }).then(()=> history.push('/user'))
       
    }}else {
        setErr('Full Name or Favorate Code cannot be empty')
    }
    }} >Add</button>
    {err && <h5 style={{color: 'red'}}>{err}</h5>}
    </div>
    )
}