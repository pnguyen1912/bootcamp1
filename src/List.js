import React from 'react'
export default function List(props){
    return(
            <ul>
                {props.array.map((item,index) =>
                <div key={index}>
                        <li >
                            {item} <button onClick={(e)=>props.function(item,index)}>Add To WishLista</button>
                        </li>
                        </div>
                  
            )}
            </ul>
    )
}