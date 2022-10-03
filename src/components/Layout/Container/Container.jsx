import styles from "./Container.module.css";
function Container({children}) {
    return (
        <div className={styles.container_content}>
            {children}
        </div>
    )
}

export default Container;