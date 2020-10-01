import React from 'react'
import List from './List'
export default function Display(props){
    return(
        <div>
            <h2>{props.name} ({props.array.length})</h2>
           <List array={props.array} function={props.function} />
        </div>
    )
}