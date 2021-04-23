import React, {useState, useEffect, useRef} from 'react';

const TodoForm = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleSubmit = (event) => {
        
        // console.log(e);
        event.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });
        setInput("");
    };
    const handleOnChange = (e) => setInput(e.target.value);
    
    return(
        <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? (
            <>
            <input
                placeholder='Update your item'
                value={input}
                onChange={handleOnChange}
                name='text'
                ref={inputRef}
                className='todo-input edit'
            />
            <button onClick={handleSubmit} className='todo-button edit'>
                Update
            </button>
            </>
        ) : (
            <>
            <input
                placeholder='Add a todo'
                value={input}
                onChange={handleOnChange}
                name='text'
                className='todo-input'
                ref={inputRef}
            />
            <button onClick={handleSubmit} className='todo-button'>
                Add todo
            </button>
            </>
        )}
    </form>
        // <div>
        //     <form action="#" onSubmit={handleSubmit}>
        //         <input type="text"
        //          placeholder="Add a todo"
        //           value={input} name="text"
        //            className='todo-input' 
        //            onChange={handleOnChange} />
        //             <button type="submit">Add todo</button>
                
        //     </form>
        // </div>
    );

}
export default TodoForm;