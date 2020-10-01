import React from 'react'
export default function VotinngApp(){
    let defaultArray = [
        {name: 'React',vote: 0},
        {name: 'Angular',vote:0},
        {name: 'Vue',vote:0},
        {name: 'Ember',vote:0},
        {name: 'jQuery',vote:0},
    ]
    const [items,setItems] = React.useState(defaultArray)

    const addVote=(item)=>{
        // item = {name: "React", vote: 0}
        let newItems = [...items]
    //    newItems.map(i=>i.name === item.name ? i.vote++ : null)
       let index = newItems.findIndex(i=>i.name === item.name)
       newItems[index].vote ++
        setItems(newItems)
    }
    const minusVote=(item)=>{
        // item = {name: "React", vote: 0}
        let newItems = [...items]
    //    newItems.map(i=>i.name === item.name ? i.vote++ : null)
       let index = newItems.findIndex(i=>i.name === item.name)
       newItems[index].vote --
        setItems(newItems)
    }
    return(
        <div style={{textAlign: 'center'}}>
            <h1>Javascript Voting App</h1>
            {items.sort((b,a)=>a.vote-b.vote).map((item,index)=><h3 style={index === 0? {backgroundColor: 'green',borderStyle: 'dotted',}: {borderStyle: 'dotted',backgroundColor: 'red'}}>{item.vote} {item.name}
            <button onClick={()=>minusVote(item)}>-</button>
            <button onClick={()=>addVote(item)}>+</button></h3>)}
        </div>
    )
}