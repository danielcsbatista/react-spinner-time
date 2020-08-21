

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

___$insertStyle(".base {\n  margin: 5px;\n  width: 40px;\n  height: 40 px;\n  transform: rotate(270deg);\n}\n\n.path {\n  stroke: #d9d9d9;\n  stroke-linecap: round;\n  stroke-width: 6;\n  opacity: 1;\n  fill: none;\n}\n\n.background {\n  stroke: #d9d9d9;\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes dash {\n  0% {\n    stroke-dasharray: 0, 150;\n    stroke: #2185d0;\n    opacity: 1;\n  }\n  50% {\n    stroke: #2185d0;\n  }\n  70% {\n    stroke: #2185d0;\n  }\n  80% {\n    stroke: #d49101;\n  }\n  90% {\n    stroke: #ce1919;\n    opacity: 1;\n  }\n  99% {\n    opacity: 1;\n  }\n  100% {\n    stroke-dasharray: 120;\n    opacity: 0;\n    stroke: #ce1919;\n  }\n}");

/**
 * Component that counts the cycle of time
 * @param props.timeInSeconds lap time in seconds
 * @param props.totalLaps number of laps
 * @returns props.onLapInteraction function with data return for each lap
 */
var ReactSpinnerTimer = function (_a) {
    var timeInSeconds = _a.timeInSeconds, totalLaps = _a.totalLaps, onLapInteraction = _a.onLapInteraction, isRefresh = _a.isRefresh;
    var _b = React.useState(1), actualLap = _b[0], setActualLap = _b[1];
    // const actualLap = 1;
    var updateLapsData = function (finish) {
        onLapInteraction({
            actualLap: actualLap,
            totalLaps: totalLaps,
            isFinish: finish,
            timeInSeconds: timeInSeconds,
        });
    };
    var handleFinish = function () {
        updateLapsData(true);
    };
    var handleUpdate = function () {
        updateLapsData(false);
        setActualLap(actualLap + 1);
    };
    if (isRefresh)
        return React.createElement("div", null);
    return (React.createElement("div", null,
        React.createElement("svg", { version: "1.1", className: "base", viewBox: "0 0 50 50" },
            React.createElement("circle", { className: "path background", cx: "25", cy: "25", r: "20" }),
            React.createElement("circle", { className: "path", cx: "25", cy: "25", r: "20", style: {
                    animation: "dash " + timeInSeconds + "s linear " + totalLaps,
                }, onAnimationEnd: handleFinish, onAnimationIterationCapture: handleUpdate }))));
};

exports.default = ReactSpinnerTimer;
//# sourceMappingURL=index.js.map
