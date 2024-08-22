// MAKING FORM A SEPARATE COMPONENT FROM Todo.jsx

import { useState } from "react";
import styles from './form.module.css';

export default function Form({todos,setTodos}) {
    const [todo,setTodo]=useState({name:"",done:false});
    // const [todo,setTodo]=useState("");
    //const [todos,setTodos]=useState([]); SINCE it is needed by both Form and Todolist component it will declared in parent of both Todo component

    function handleSubmit(e){
        e.preventDefault(); 
        setTodos([...todos,todo]); 
        setTodo({name:"",done:false});
    }
    return ( 
        
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
            <input className={styles.input} placeholder="Enter the Todo items" onChange={(e)=>setTodo({name:e.target.value,done:false})} type="text" value={todo.name} />
            <button className={styles.button} type="submit">Add</button>
            </div>
        </form>
        
);
}