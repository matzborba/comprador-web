import styles from "./BasicCard.module.css"
function BasicCard({ children, color, align }) {
    return (
        <div className={styles.basic_card} style={{ backgroundColor: color, textAlign: align}}>
            {children}
        </div>
    )
 }
export default BasicCard