import React, { useState } from "react";
import "./style.css";

interface IProps {
  timeInSeconds: number;
  totalLaps: number;
  isRefresh?: boolean;
  onLapInteraction: Function;
}

/**
 * Component that counts the cycle of time
 * @param props.timeInSeconds lap time in seconds
 * @param props.totalLaps number of laps
 * @returns props.onLapInteraction function with data return for each lap
 */

function ReactSpinnerTime(props: IProps): JSX.Element {
  const [actualLap, setActualLap] = useState(1);

  const updateLapsData = (finish: boolean) => {
    props.onLapInteraction({
      actualLap,
      totalLaps: props.totalLaps,
      isFinish: finish,
      timeInSeconds: props.timeInSeconds,
    });
  };

  const handleFinish = () => {
    updateLapsData(true);
  };

  const handleUpdate = () => {
    updateLapsData(false);
    setActualLap(actualLap + 1);
  };

  if (props.isRefresh) return <div></div>;

  return (
    <div>
      <svg version="1.1" className="base" viewBox="0 0 50 50">
        <circle className="path background" cx="25" cy="25" r="20" />
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          style={{
            animation: `dash ${props.timeInSeconds}s linear ${props.totalLaps}`,
          }}
          onAnimationEnd={handleFinish}
          onAnimationIterationCapture={handleUpdate}
        />
      </svg>
    </div>
  );
}

export default ReactSpinnerTime;
