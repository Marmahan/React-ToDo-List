import React, { Component } from 'react';
import Todolist from './Todolist'
import Addform from './Addform'

class App extends Component {
  state = {
    todos :[
      {id:1, content: 'Buy milk'},
      {id:2, content: 'Buy vegs'}
    ]
  }

  deleteTodo = (id) =>{
    //A new array will be returned that doesn't contain the element with the id that's equal to the id passed
    const todos=this.state.todos.filter(todo =>{
      return todo.id!==id;
    })
    this.setState({
      todos:todos
    })
  }
  // passed as props to the Addform component 
  Addtodo =(todo)=>{
    todo.id = Math.random();
    //make the content as an array and add the new element to it
    let todos = [...this.state.todos,todo];
    this.setState({
      todos:todos
    })
  }
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="page-header">
            <h1>The to do's</h1>
          </div>
          <div className="list-group">
            <Todolist thetodos={this.state.todos} deleteTodo={this.deleteTodo}/>
          </div>
          <Addform Addtodo={this.Addtodo}/>
        </div>
      </div>
    );
  }
}

export default App;
