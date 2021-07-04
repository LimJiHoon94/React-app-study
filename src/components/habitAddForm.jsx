import React, { memo } from 'react';

const HabitAddForm = memo(props => {
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault(); //새로고침 방지
        console.log(inputRef.current.value);
        const name = inputRef.current.value;
        name && props.onAdd(name);
        //초기화
        inputRef.current.value = "";
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} 
                   type="text" 
                   className="add-input" 
                   placeholder="Habit" 
            />
            <button className="add-button">Add</button>
        </form>
     );
  });

export default HabitAddForm;


/* 
class HabitAddForm extends PureComponent {
    
    inputRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault(); //새로고침 방지
        console.log(this.inputRef.current.value);
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //초기화
        this.inputRef.current.value = "";
    }

    render() {
        
        return (
           <form className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
                <button className="add-button">Add</button>
           </form>
        );
    }
}

export default HabitAddForm; */