import styles from "./programs.module.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
export default function Programs() {
  return (
    <div className={styles.programs} id="program">
      <div className={styles.program}>
        <img src={program_1} alt="program1" />
        <div className={styles.caption}>
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className={styles.program}>
        <img src={program_2} alt="program2" />
        <div className={styles.caption}>
          <img src={program_icon_2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className={styles.program}>
        <img src={program_3} alt="program3" />
        <div className={styles.caption}>
          <img src={program_icon_3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
}
