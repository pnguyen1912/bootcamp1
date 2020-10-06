import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Home from './Routers/Home'
  import Add from './Routers/Add'
  import User from './Routers/User'
import axios from 'axios'
export default function Routing(){
    const [peopleArray,setPeopleArray] = React.useState([])

    useEffect(()=>{
        axios({
            method: 'get',
            url: 'https://5f7bab5e00bd740016909c7f.mockapi.io/tier1'
        }).then(res => {
            console.log(res.data)
            let dataArray = res.data.map(item=> {
                return {
                    fullName: item.name,
                    favCode: item.favCode,
                    homeTown: item.homeTown
                }
            })
            setPeopleArray(dataArray)
        })
    },[])

    return(
        <div>
        <Router>
                <Link to='/'><button>Home</button></Link>
                <Link to='/user'><button>User</button></Link>
                <Link to='/add'><button>Add</button></Link>
   
            <Switch>
                <Route exact path='/' render={()=><Home />} />
                <Route path='/add' render={()=><Add 
                  peopleArray={peopleArray} 
                  setPeopleArray={setPeopleArray}
                 />}
                 />
                 
                <Route path='/user'><User 
                                  peopleArray={peopleArray} 
/>
                                  </Route>
            </Switch>
        </Router>
        </div>
    )
}
