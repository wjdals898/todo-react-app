import './App.css';
import React from 'react';
import Todo from './Todo';
import AddTodo from "./AddTodo.js"
import { Container, List, Paper } from '@material-ui/core';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { // item 리스트를 state에서 관리
      items: [
        {id:0, title: "Hello World 1", done:true},  // 가상 데이터를 넣어서 테스트
        {id:1, title: "Hello World 2", done:false}, // 나중에는 백엔드에서 데이터를 얻어올 예정
        {id:2, title: "Hello World 3", done:true}]
    };
  }

  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-"+thisItems.length;
    item.done = false;
    thisItems.push(item);
    this.setState({items:thisItems});
    console.log("items : ",this.state.items);
  }
  
  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin:16}}>
        <List>
          {this.state.items.map((item,idx) => (
            <Todo item={item} key={item.id} />
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
