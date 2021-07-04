import React, { Component } from 'react';

class Habit extends Component {
   


   
    handleIncrement =() => {
        //state 오브젝트 안에 있는 Count를 증가 한뒤 state를 럽데이트 한다.
        // 그냥 this.state.count + 1을 하면 리액트가 업데이트를 인식하지 못한다.
        //this.setState({count : this.state.count + 1});
        this.props.onIncrement(this.props.habit)
    }

    handleDecrement =() => {
        //state 오브젝트 안에 있는 Count를 감소 한뒤 state를 럽데이트 한다.
        //const count = this.state.count - 1;
        //this.setState({count : count < 0 ? 0 : count});
        this.props.onDecrement(this.props.habit)
    }

    handleDelete =() => {
        this.props.onDelete(this.props.habit)
    }

    render() {
       // console.log(this.props.habit);
       // const habitName = this.props.habit.name;
       // const habitCount = this.props.habit.count;
        const {name , count} = this.props.habit;

        return (
        <li className="habit"> 
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
                <i className="fas fa-trash "></i>
            </button>
        </li>
        );
    }
}

export default Habit;