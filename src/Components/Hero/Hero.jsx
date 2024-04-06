import styles from "./hero.module.css";
import dark_arrow from "../../assets/dark-arrow.png";
export default function Hero() {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.herotext}>
        <h1>We ensure education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to to empower students with
          the knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
}
