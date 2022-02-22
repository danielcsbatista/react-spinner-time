import * as React from "react";
import "./index.scss";

export interface IProps {
  timeInSeconds: number;
  totalLaps: number;
  isRefresh?: boolean;
  onLapInteraction: Function;
  isPaused?: boolean;
}

/**
 * Component that counts the cycle of time
 * @param props.timeInSeconds lap time in seconds
 * @param props.totalLaps number of laps
 * @param props.isPause pause laps - true is default
 * @returns props.onLapInteraction function with data return for each lap
 */

const ReactSpinnerTimer: React.FC<IProps> = ({
  timeInSeconds,
  totalLaps,
  onLapInteraction,
  isRefresh,
  isPaused = true
}) => {
  const [animationRunning, setAnimationRunning] = React.useState(true);
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

  const handleOnClick = () => {
    if(isPaused) {
      setAnimationRunning(!animationRunning);
    }  
  }

  if (isRefresh) return <div></div>;

  return (
    <div onClick={handleOnClick}>
      <svg version="1.1" className={`base ${animationRunning ? 'running' : 'paused'}`} viewBox="0 0 50 50">
        <circle className="path background" cx="25" cy="25" r="20" />
        <circle
          className={`path ${animationRunning ? 'running' : 'paused'}`}
          cx="25"
          cy="25"
          r="20"
          style={{
            animation: `dash ${timeInSeconds}s linear ${totalLaps}`,
            animationPlayState: `${animationRunning ? 'running' : 'paused'}`,
          }}
          onAnimationEnd={handleFinish}
          onAnimationIterationCapture={handleUpdate}
        />
        <rect 
          width="18" 
          height="4"
          y="18"
          x="16"
          r="20"
          style={{
            visibility: animationRunning ? 'hidden': 'visible',
            fill: 'rgb(169,169,169)',
           }}
          />
          <rect 
          width="18" 
          height="4"
          y="28"
          x="16"
          r="20"
          style={{
            visibility: animationRunning ? 'hidden': 'visible',
            fill: 'rgb(169,169,169)',
           }}
          />
      </svg>
    </div>
  );
};

export default ReactSpinnerTimer;
