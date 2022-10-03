import ProgressBar from "react-customizable-progressbar";
import styles from "./RoundedChart.module.css";

function RoundedChart({ progress, text, color }) {
  return (
    <div className={styles.rounded_chart}>
      <ProgressBar
        radius={100}
        progress={progress}
        strokeWidth={20}
        strokeColor={color}
        strokeLinecap="round"
        trackStrokeWidth={20}
        counterClockwise
      >
        <div className={styles.indicator}>
          <h4>{progress}</h4>
          <p>{text}</p>
        </div>
      </ProgressBar>
    </div>
  );
}

export default RoundedChart;
