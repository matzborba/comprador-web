import styles from "./BasicCard.module.css"
function BasicCard({ children, color, align, w }) {
    return (
        <div className={styles.basic_card} style={{ backgroundColor: color, textAlign: align, width: w}}>
            {children}
        </div>
    )
 }
export default BasicCard