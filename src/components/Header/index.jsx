import React, { Component } from 'react';
import './index.css';
import {nanoid} from 'nanoid';

export default class Header extends Component {

  handleKeyUp = (event) => {
    const {keyCode, target} = event;
    if(keyCode !== 13) {
      //如果不为回车键
      return;
    }
    if(target.value.trim() === '') {
      //如果输入内容为空
      alert('输入内容不能为空');
      return;
    }
    const todoObject = {id:nanoid(), name:target.value, done:false};
    this.props.addTodo(todoObject);
    target.value = '';
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="输入一个Todo项目，按回车确认"></input>
      </div>
    );
  }
}
