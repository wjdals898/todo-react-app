import './App.css';
import React from 'react';
import Todo from './Todo';
import AddTodo from "./AddTodo.js"
import { Container, List, Paper } from '@material-ui/core';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { // item 리스트를 state에서 관리
      items: []
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

  delete = (item) => {
    console.log("delete called"); //test
    // state에 있는 item 가져오기
    const thisItems = this.state.items;
    console.log("Before Update Items : ", this.state.items)
    // 제거하기
    const newItems = thisItems.filter(e => e.id !== item.id);
    // 다시 state에 넣기
    this.setState({items:newItems}, () => {
      console.log("Update Items : ", this.state.items)
    });
  }
  
  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin:16}}>
        <List>
          {this.state.items.map((item,idx) => (
            <Todo item={item} key={item.id} delete={this.delete}/>
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
