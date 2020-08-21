import * as React from "react";
import "./index.scss";

export interface IProps {
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

const ReactSpinnerTimer: React.FC<IProps> = ({
  timeInSeconds,
  totalLaps,
  onLapInteraction,
  isRefresh,
}) => {
  const [actualLap, setActualLap] = React.useState(1);
  const updateLapsData = (finish: boolean) => {
    onLapInteraction({
      actualLap,
      totalLaps: totalLaps,
      isFinish: finish,
      timeInSeconds: timeInSeconds,
    });
  };

  const handleFinish = () => {
    updateLapsData(true);
  };

  const handleUpdate = () => {
    updateLapsData(false);
    setActualLap(actualLap + 1);
  };

  if (isRefresh) return <div></div>;

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
            animation: `dash ${timeInSeconds}s linear ${totalLaps}`,
          }}
          onAnimationEnd={handleFinish}
          onAnimationIterationCapture={handleUpdate}
        />
      </svg>
    </div>
  );
};

export default ReactSpinnerTimer;
