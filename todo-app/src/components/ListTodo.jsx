import React, {Component} from 'react'

import TodoDataService from '../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'


import './ListTodo.css';


class ListTodo extends Component {
  constructor(props){
    console.log('constructor')
    super(props)
    this.state ={
      todos :[],
      message : null
    }
    this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
    this.updateTodoClicked = this.updateTodoClicked.bind(this)
    this.refreshTodos = this.refreshTodos.bind(this)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')

  }

  shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }


  componentDidMount() {
    console.log('componentDidMount')
        this.refreshTodos();
        console.log(this.state)
  }

  refreshTodos() {
       let username = AuthenticationService.getLoggedInUserName()
       TodoDataService.retrieveAllTodos(username)
           .then(
               response => {
                   //console.log(response);
                   this.setState({ todos: response.data })

               }
           )
   }

   updateTodoClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/todos/${id}`)
        // /todos/${id}
        // let username = AuthenticationService.getLoggedInUserName()
        // //console.log(id + " " + username);
        // TodoDataService.deleteTodo(username, id)
        //  .then (
        //      response => {
        //         this.setState({message : `Delete of todo ${id} Successful`})
        //         this.refreshTodos()
        //      }
        //  )

    }

  deleteTodoClicked(id) {
    let username = AuthenticationService.getLoggedInUserName()
    // console.log(id, username)
    TodoDataService.deleteTodo(username, id)
    .then(
        response => {
          this.setState({message : "Delete Sucessful"})
          this.refreshTodos()
        }
    )
  }





  render(){
    console.log('render')
    return (
      <div>
                 <h1>List Todos</h1>
                 {this.state.message && <div className="alert alert-primary">{this.state.message}</div>}
                 <div className="container">
                 <table className="table">
                     <thead>
                         <tr>
                             <th>Description</th>
                             <th>Target Date</th>
                             <th>Is Completed?</th>
                             <th>Update</th>
                             <th>Delete</th>
                         </tr>
                     </thead>
                     <tbody>
                       {
                         this.state.todos.map (
                            todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{moment(todo.targetDate).format('MM-DD-YYYY')}</td>
                                    <td><i onClick={()=> this.updateTodoClicked(todo.id)}className="fas fa-edit"></i></td>
                                    <td><i onClick={()=> this.deleteTodoClicked(todo.id)}className="fas fa-minus-circle"></i></td>
                                </tr>
                         )
                        }
                     </tbody>
                 </table>
                 <div className="row">
                        <button className="vibesbutton3" onClick={this.addTodoClicked}>Add</button>
                    </div>
              </div>
            </div>
        )
  }
}

export default ListTodo;
