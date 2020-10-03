import React from 'react'

let data =[
    { name: 'React', type: 'active'},
    { name: 'Angular', type: 'complete'},
]

export default function ToDoList(props){
    const [userInput, setUserInput] = React.useState('')
    const [dataItems, setDataItems] = React.useState([])
    const [show,setShow] = React.useState('all')

    const changeStatus=(item)=>{
        console.log('help', item)
        if (item.type === 'active'){
            // item.type = 'complete'
            let newArray = [...dataItems]
            let index= newArray.findIndex(i=>i.name === item.name)
            newArray[index].type = 'complete'
            setDataItems(newArray)
        } else {
            let newArray = [...dataItems]
            let index= newArray.findIndex(i=>i.name === item.name)
            newArray[index].type = 'active'
            setDataItems(newArray)
        }
    }

    const clearComplete = ()=>{
        let newArray = [...dataItems]
        let ActiveArray = []
        newArray.map(item => item.type === 'active'? ActiveArray.push(item): null )
        setDataItems(ActiveArray)
    }



    return(
        <div>
<h1>TO DOs</h1>
<input 
value={userInput} 
onChange={e=>setUserInput(e.target.value)}
onKeyPress={e=>{
    if (e.key === 'Enter'){
        let newObj = {name: userInput, type: 'active'}
        let newArray = [...dataItems]
        newArray.unshift(newObj)
        setDataItems(newArray)
        setUserInput('')
    }
}}
 />
{show === 'all' && 
    <div>
 {dataItems.filter(i=>i.type === 'active').map(item => <h4><input onClick={()=>changeStatus(item)} checked={item.type ==='complete'} type='checkbox' />{item.name} {item.type === 'active' ? <button>X</button>: null}</h4>)}
 {dataItems.filter(i=>i.type === 'complete').map(item => <h4><input onClick={()=>changeStatus(item)} checked={item.type ==='complete'} type='checkbox' />{item.name} {item.type === 'active' ? <button>X</button>: null}</h4>)}
 </div>
 }
 
 {show === 'active' && 
    <div>
 {dataItems.filter(i=>i.type === 'active').map(item => <h4><input onClick={()=>changeStatus(item)} checked={item.type ==='complete'} type='checkbox' />{item.name} {item.type === 'active' ? <button>X</button>: null}</h4>)}
 </div>
 }

  {show === 'complete' && 
    <div>
 {dataItems.filter(i=>i.type === 'complete').map(item => <h4><input onClick={()=>changeStatus(item)} checked={item.type ==='complete'} type='checkbox' />{item.name} {item.type === 'active' ? <button>X</button>: null}</h4>)}
 </div>
 }
 
<br />
<h3>{dataItems.filter(i=>i.type === 'active').length}</h3>

<button onClick={()=>setShow('all')}>All</button>
<button onClick={()=>setShow('active')}>Active</button>
<button onClick={()=>setShow('complete')}>Complete</button>
<button onClick={()=>clearComplete()}>Clear Completed</button>
        </div>
    )
}