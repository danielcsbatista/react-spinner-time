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
declare const ReactSpinnerTimer: React.FC<IProps>;
export default ReactSpinnerTimer;
