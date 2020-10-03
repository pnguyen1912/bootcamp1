import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Home from './Routers/Home'
  import About from './Routers/About'
  import User from './Routers/User'

export default function Routing(){
    const [userInput,setUserInput] = React.useState('')

    return(
        <div>
        <Router>
        <Home />
        <input onChange={e=>setUserInput(e.target.value)} />
            <Switch>
                {/* <Route exact path='/' render={()=><Home />} /> */}
                <Route path='/about' render={()=><About name={userInput} />} />
                <Route path='/user' render={()=><User name={userInput} />} />
            </Switch>
        </Router>
        </div>
    )
}
