import React from 'react'

export default function Available(){
    const [userInput,setUserInput] = React.useState('')
    const [availableArray,setAvailableArray] = React.useState([])
    const [wishListArray,setWishListArray] = React.useState([])

    const addToAvailable= ()=>{
        // availableArray.push(userInput)
        let newItem = userInput
        if (availableArray.find(item=>item === newItem)){
            return
        }
        let anotherAvailable = [...availableArray]
        anotherAvailable.push(newItem)
        setAvailableArray(anotherAvailable)
    }
    
    const addToWishList = (item,index)=>{
        // console.log(item)
        // console.log(index)
        let anotherAvailable = [...availableArray]
        anotherAvailable.splice(index,1)
        setAvailableArray(anotherAvailable)
        let anotherWishList = [...wishListArray]
        anotherWishList.push(item)
        setWishListArray(anotherWishList)
    }

    const removeToWishList = (item,index)=>{
        // console.log(item)
        // console.log(index)
        let anotherWishList = [...wishListArray]
        anotherWishList.splice(index,1)
        setWishListArray(anotherWishList)
        let anotherAvailable = [...availableArray]
        anotherAvailable.push(item)
        setAvailableArray(anotherAvailable)
    }

    
    return(
        <div>
            <h1>My Wish List</h1>
            <h2>Available Items ({availableArray.length})</h2>
            <input onChange={(e)=>setUserInput(e.target.value)} placeholder="Add Item" />
            <button onClick={(e)=>addToAvailable()}>Add To Available</button>
            <ul>
                {availableArray.map((item,index) =>
                <div key={index}>
                        <li >
                            {item} <button onClick={(e)=>addToWishList(item,index)}>Add To WishLista</button>
                        </li>
                        </div>
                    
            )}
            </ul>



            <h2>My Wist List ({wishListArray.length})</h2>
            <ul>
                {wishListArray.map((item,index) =>
                <div key={index}>
                        <li >
                            {item} <button onClick={(e)=>removeToWishList(item,index)}>Back plz</button>
                        </li>
                        </div>
                    
            )}
            </ul>
        </div>
    )
}