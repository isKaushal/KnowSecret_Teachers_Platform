import styles from "../styles/Common.module.css";

export default function Saction({ children }) {
  return <div className={styles.section}>{children}</div>;
}
