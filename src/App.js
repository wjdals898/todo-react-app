import './App.css';
import React from 'react';
import Todo from './Todo';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: {id:0, title: "Hello World 1", done:true},
    };
  }
  
  render() {
    return (
      <div className="App">
        <Todo item={this.state.item}/> {/* 부모가 자식을 생성할 때 정보를 줄 수 있음 */}
      </div>
    );
  }
}

export default App;
