import React, { Component } from 'react';
import TodoForm from './component/TodoForm';
import List from './component/List';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      list: []// this.props.data
    }
    this.handleClick = this.handleClick.bind(this);
    this.getToDoItem = this.getToDoItem.bind(this);
    this.getUpdatedItem = this.getUpdatedItem.bind(this);
    this.getDelateItem = this.getDelateItem.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1
    })
  }

  getToDoItem(item) {
    
    let newList = this.state.list;
    newList.push(item);

    this.setState({
      list: newList
    })
  }

  getUpdatedItem = (upadtedItem) => {

    
    const index = this.state.list.findIndex(item => item.id === upadtedItem.id),
      newList = [...this.state.list];
    newList[index] = upadtedItem;
    this.setState({
      list: newList
    })
  }

  getDelateItem = (id) => {
    let newlist = this.state.list;
    newlist = newlist.filter(obj => {
      return obj.id !== id
    });
    this.setState({
      list: newlist
    })

  }

  render() {

    return (
      <div id="app">
        <div className="data-reactroot">
          <h1>TODOs</h1>
          <TodoForm getToDoItem={this.getToDoItem} />
          <List toDoList={this.state.list} getUpdatedItem={this.getUpdatedItem} getDelateItem={this.getDelateItem} />
        </div>
      </div>
    )
  };
}

export default App;
