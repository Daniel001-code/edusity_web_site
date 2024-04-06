import styles from "./about.module.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
export default function About({ setPlayState }) {
  return (
    <div className={styles.about} id="about">
      <div className={styles.aboutleft}>
        <img className={styles.aboutimg} src={about_img} alt="" />
        <img
          onClick={() => {
            setPlayState(true);
          }}
          className={styles.playicon}
          src={play_icon}
          alt=""
        />
      </div>
      <div className={styles.aboutright}>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innuvation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educator to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, adminisrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
}
