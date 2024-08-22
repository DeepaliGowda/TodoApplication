import styles from './TodoItem.module.css';
function TodoItem({item, todos,setTodos}){
    function handleDelete(item){
        setTodos(todos.filter((todo)=>todo!==item)) // all items except the current item will make a new list
        // console.log("Deleted item is",item)
    }
    function handleClick(name){ //for striking item when clicked
        // console.log("clicked",name);
        const newArray=todos.map((todo)=>
        todo.name===name?{...todo,done:!todo.done}:todo //ternary operator.. toggle when item is clicked
        )
        setTodos(newArray)
    }
    const className=item.done?styles.completed:""; // if item done is true strike the item
    
return (
<div className={styles.item}>
<div className={styles.itemName}>
    <span className={className} onClick={()=>handleClick(item.name)}>{item.name}</span>
<span>
    <button onClick={()=>handleDelete(item)} className={styles.closeBtn} >x</button>
    </span>
</div>
<hr className={styles.line} />
</div>
);
}
export default TodoItem;