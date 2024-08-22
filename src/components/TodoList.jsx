import styles from './ToDoList.module.css';
import TodoItem from "./TodoItem";
export default function TodoList({todos,setTodos}){
    const sortedTodos=todos.slice().sort((a,b)=>Number(a.done)-Number(b.done)) //Slice will create a copy and sorting based on whether its done or not.. done is boolean so convert in into number
    return (
        <div className={styles.list}>
            {sortedTodos.map((item)=>( 
            <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
        ))}
    
        </div>
    );
}