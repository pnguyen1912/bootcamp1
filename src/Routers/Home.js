import React from 'react'
import {Link} from 'react-router-dom'
export default function Home (){
    return(
        <h2>Home
            <Link to='/about'><button>Go To About</button></Link>
            <Link to='/user'><button>Go To User</button></Link>
        </h2>
    )
}