import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./footer";

function Todo(){
    // const [todo,setTodo]=useState("");
    // const [todos,setTodos]=useState([]); // to store all todo items in a list

    // function handleSubmit(e){
    //     e.preventDefault(); 
    //     setTodos([...todos,todo]);  keeping the previous todos using spread operator and adding current todo
    //     setTodo("");               Once new todo is added emptying the input field 
    // }

    const [todos,setTodos]=useState([]);
    const todoDone=todos.filter((todo)=>todo.done).length // count no of todo completed
    const totalTodos=todos.length
    return (
    <div>
        <Form todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        <Footer todoDone={todoDone} totalTodos={totalTodos}/>
        
    </div>
    );   
}
export default Todo;

        {/* BELOW FORM AND TODO LIST IS MADE INTO SEPARATE COMPONENT AND IMPORTED ABOVE */}
        {/* MOVING THIS FORM INTO SEPARATE COMPONENT */}

        {/* <form onSubmit={handleSubmit}>
            <input onChange={(e)=>setTodo(e.target.value)} type="text" value={todo} />
            <button type="submit">Add</button>
        </form> */}

        {/* MOVING THE TODOS LIST INTO SEPARATE COMPONENT */}

        {/* {todos.map((item)=>(    // to display items in todos array */}
            {/* // <h3>{item}</h3>
            <TodoItem key={item} item={item}/> //Another component.. Key is used to identify unique elements in the array and here im using item name itself as a key
            ))} */}
    

