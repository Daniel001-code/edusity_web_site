import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>© 2024 Edusity. All rights reserved.</p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
}
