import React from 'react';
import {  Input, Button,Row,Col } from 'reactstrap';

function App() {
  const [userInput,setUserInput] = React.useState('')
  const [items,setItems] = React.useState([])
// let array = [{name: 'order food',type: 'todo'},
// {name: 'order drinks',type: 'doing'},
// {name: 'order car',type: 'done'}]

  return (
    <div>
      <Row>
        <Col> Todo {items.filter(item=>item.type === 'todo').map(item=>
          <h2>{item.name}</h2>
          )}
             <Input value={userInput} onChange={(event)=> {setUserInput(event.target.value)} } />
            <Button onClick={()=>{
              if (userInput !== ''){
                let itemObject = {
                  name: userInput,
                  type: 'todo'
                }
                let newArray = [...items]
                newArray.push(itemObject)
                setItems(newArray)
                setUserInput('')
            }}} >Add</Button>
       </Col>
        <Col>Doing {items.filter(item=>item.type === 'doing').map(item=>
          <h2>{item.name}</h2>
          )}</Col>
      </Row>
      
    </div>
  );
}

export default App;