import './App.css';
import React from 'react';
import Todo from './Todo';
import AddTodo from "./AddTodo.js"
import { Container, List, Paper } from '@material-ui/core';
import {call} from "./service/ApiService";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { // item 리스트를 state에서 관리
      items: []
    };
  }

  componentDidMount() {
    call("/todo", "GET", null).then((response) => 
      this.setState({items:response.data})
      );
  }

  add = (item) => {
    call("/todo", "POST", item).then((response) =>
      this.setState({items:response.data})
    );
  };

  delete = (item) => {
    call("/todo", "DELETE", item).then((response) =>
      this.setState({items:response.data})
    );
  };

  update = (item) => {
    call("/todo", "PUT", item).then((response) =>
      this.setState({items:response.data})
    );
  };
  
  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin:16}}>
        <List>
          {this.state.items.map((item,idx) => (
            <Todo 
              item={item} 
              key={item.id} 
              delete={this.delete}
              update={this.update}/>
          ))}
        </List>
      </Paper>
    );

    return (
      <div className="App">
        {/*<Todo item={this.state.items}/>  부모가 자식을 생성할 때 정보를 줄 수 있음 */}
        {/* <Todo> 컴포넌트 여러 개 */}
        <Container maxWidth="md">
          <AddTodo add={this.add}/>
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );
  }
}

export default App;
