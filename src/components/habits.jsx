import React, { PureComponent } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';


class Habits extends PureComponent {
    
    componentDidUpdate(){
        //컴포넌트가 업데이트 될때 마다


    }

    //+
    handleIncrement =(habit) => {
        this.props.onIncrement(habit);
    }
    //-
    handleDecrement =(habit) => {
        this.props.onDecrement(habit);
    }
    
    handleDelete =(habit) => {
        this.props.onDelete(habit);
    }

    hendleAdd = name => {
        this.props.onAdd(name);
    }


    render() {
        return (
           <>
           <HabitAddForm onAdd={this.hendleAdd}/>
            <ul>
               {this.props.habits.map(habit => (
                    <Habit
                        key={habit.id} 
                        habit={habit}
                        onIncrement={this.handleIncrement}  
                        onDecrement={this.handleDecrement}  
                        onDelete={this.handleDelete}  
                    />
                ))}
           </ul>
           <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
           </>
        );
    }
}

export default Habits;