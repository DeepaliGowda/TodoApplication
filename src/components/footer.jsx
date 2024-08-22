import styles from './footer.module.css';
export default function Footer({todoDone,totalTodos}){
    return <div className={styles.footer}>
        <span className={styles.item}>Completed Todos:{todoDone}</span>
        <span className={styles.item}>Total Todos:{totalTodos}</span>
    </div>
    }