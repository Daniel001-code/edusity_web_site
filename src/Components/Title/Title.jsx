import styles from "./title.module.css";
export default function Title({ subTitle, title }) {
  return (
    <div className={styles.titles}>
      <p>{title}</p>
      <h2>{subTitle}</h2>
    </div>
  );
}
