
import LoginForm from "../../components/Layout/LoginForm/LoginForm";
import styles from "./Login.module.css";

function LoginPage() {
  return (
    <div className={styles.login_content}>
      <LoginForm/>
    </div>

  );
}

export default LoginPage;
