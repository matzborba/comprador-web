import styles from "./StatusTask.module.css";

function StatusTask({ text, color, colorText }) {
    return (
        <div className={styles.content}  style={{backgroundColor: color}}>
            <p style={{color: colorText}}>{text}</p>
        </div>
    )
}

export default StatusTask;