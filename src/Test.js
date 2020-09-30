import React from 'react';
import {  Input, Button,Row,Col } from 'reactstrap';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            userInput: ''
        }
    }

  render(){
  return (
    <div>
      <Row>
        <Col> Todo
             <Input />
            <Button>Add</Button>
       </Col>
        <Col>Doing</Col>
        <Col>Done</Col>
      </Row>
      
    </div>
  );
}
}
export default App;