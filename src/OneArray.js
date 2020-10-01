import React from 'react'

export default function Available(){
    const [userInput,setUserInput] = React.useState('')
    const [items,setItems] = React.useState([])

    const addToAvailable = ()=>{
        if (userInput !== '' && items.find(i=>i.name === userInput)){
            return
        }
        let item = {
            name: userInput,
            type: 'available'
        }
        let newArray = [...items]
        newArray.push(item)
        setItems(newArray)
        setUserInput('')
    }

    const modify = (item,type)=>{
        let newArray = [...items]
        let index = newArray.findIndex(i=>i.name === item.name)
        newArray[index].type = type
        setItems(newArray)
    }

    // const removeToWishList = (item)=>{
    //     let newArray = [...items]
    //     let index = newArray.findIndex(i=>i.name === item.name)
    //     newArray[index].type = 'available'
    //     setItems(newArray)
    // }

    return(
        <div>
        <h1>My Wish List</h1>
        <h2>Available Items (2)</h2>
        <input value={userInput} onKeyDown={e=> e.key === 'Enter' ? addToAvailable():null} onChange={(e)=>setUserInput(e.target.value)} placeholder="Add Item" />
        <button onClick={(e)=>addToAvailable()}>Add To Available</button>
        <ul>
            {items.filter(i=>i.type === 'available').map((item)=>
                <li>{item.name}<button onClick={()=>modify(item,'wish')}>Add To Wishlist</button></li>
                )}
        </ul>


        <h2>My Wist List (2)</h2>
        <ul>
            {items.filter(i=>i.type === 'wish').map((item)=>
                <li>{item.name}<button onClick={()=>modify(item,'avaible')}>Remove me</button></li>
                )}
        </ul>
    </div>
    )
}