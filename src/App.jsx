import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import './App.css'

export default class App extends Component {

  state = {todos: [
    {id: '001', name: '学习React', done: false},
    {id: '002', name: '学习Node.js', done: false},
    {id: '003', name: '按时吃饭', done: false},
    {id: '004', name: '早睡早起', done: false},
  ],}

  //添加一个Todo项目
  addTodo = (todoObject) => {
    const {todos} = this.state;
    //构造新的todo项目
    const newTodos = [todoObject, ...todos];
    //更新状态
    this.setState({todos: newTodos});
  }

  //更新一个todo项目
	updateTodo = (id,done)=>{
		const {todos} = this.state
		const newTodos = todos.map((todoObj) => {
			if(todoObj.id === id) return {...todoObj,done}
			else return todoObj
		})
		this.setState({todos:newTodos})
	}

	//删除一个todo项目
	deleteTodo = (id)=>{
		const {todos} = this.state
		//删除指定id的todo对象
		const newTodos = todos.filter((todoObj) => {
			return todoObj.id !== id
		})
		//更新状态
		this.setState({todos:newTodos})
	}

	//全选Todo项目
	checkAllTodo = (done) => {
		const {todos} = this.state
		//加工数据
		const newTodos = todos.map((todoObj) => {
			return {...todoObj, done}
		})
		//更新状态
		this.setState({todos:newTodos})
	}

	//清除所有已完成的项目
	clearAllDone = () => {
		//获取原来的todos
		const {todos} = this.state
		//过滤数据
		const newTodos = todos.filter((todoObj) => {
			return !todoObj.done
		})
		//更新状态
		this.setState({todos:newTodos})
	}
  
  render() {
    const todos = this.state.todos;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
				  <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}

