import React from 'react'

export default class Test extends React.Component {
     state={items:[
        {name: 'React',vote: 0,url:"data:image/png;base64,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"},
        {name: 'Angular',vote:0,url:'data:image/png;base64,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'},
        // {name: 'Vue',vote:0},
        // {name: 'Ember',vote:0},
        // {name: 'jQuery',vote:0},
    ]}

     addVote=(item)=>{
        // item = {name: "React", vote: 0}
        let newItems = [...this.state.items]
    //    newItems.map(i=>i.name === item.name ? i.vote++ : null)
       let index = newItems.findIndex(i=>i.name === item.name)
       newItems[index].vote ++
        // setItems(newItems)
        this.setState({items: newItems})
    }
     minusVote=(item)=>{
        // item = {name: "React", vote: 0}
        let newItems = [...this.state.items]
    //    newItems.map(i=>i.name === item.name ? i.vote++ : null)
       let index = newItems.findIndex(i=>i.name === item.name)
       newItems[index].vote --
        // setItems(newItems)
        this.setState({items: newItems})

    }

    render(){
        return(
            <div style={{textAlign: 'center'}}>
            <h1>Javascript Voting App</h1>
            {this.state.items.sort((b,a)=>a.vote-b.vote).map((item,index)=><h3 style={index === 0? {backgroundColor: 'green',borderStyle: 'dotted',}: {borderStyle: 'dotted',backgroundColor: 'red'}}>{item.vote} <img className="touly" src={item.url} /> {item.name}
            <button onClick={()=>this.minusVote(item)}>-</button>
            <button onClick={()=>this.addVote(item)}>+</button></h3>)}
        </div>
        )
    }
}

