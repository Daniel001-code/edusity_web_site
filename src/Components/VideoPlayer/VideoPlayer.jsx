import styles from "./videoPlayer.module.css";
import video from "../../assets/student_vid.mp4";
import { useRef } from "react";
export default function VideoPlayer({ playState, setPlayState }) {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`${styles.videoPlayer}  ${playState ? "" : styles.hide}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
}
