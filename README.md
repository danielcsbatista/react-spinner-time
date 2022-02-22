![NPM](https://img.shields.io/npm/v/react-spinner-timer.svg)
![COVERAGE](https://img.shields.io/codacy/coverage/react-spinner-timer)


# React-Spinner-Timer

The React Spinner Timer for [React](https://reactjs.com).

Circular countdown timer with progressive animation.

# Component

![React Spinner Timer](https://github.com/danielcsbatista/react-spinner-time/blob/assets/exempleSpinnerTimer.gif)

# Installation and usage

To install React Spinner Timer you can run:

```
yarn add react-spinner-timer

or

npm install react-spinner-timer
```

To use:

```js
import React from "react";
import ReactSpinnerTimer from "react-spinner-timer";

function App() {
  const handleChange = (lap) => {
    if (lap.isFinish)
      console.log("Finished!!");
    else
      console.log("Running!! Lap:", lap.actualLap);
  };
  return (
    <ReactSpinnerTimer
      timeInSeconds={60}
      totalLaps={60}
      isRefresh={false}
      onLapInteraction={handleChange}
      isPause={false}
    />
  );
}
export default App;

```
See another example at [Code Sandbox](https://codesandbox.io/s/sweet-blackwell-ysxfn?file=/src/App.tsx)


## Props

### Common props you need to specify:
| Prop              | Type     | Description                           |
|-------------------|----------|---------------------------------------|
| timeInSeconds     | Number   | Component lap time                    |
| totalLaps         | Number   | Number of laps                        |
| onLapInteraction  | Function | When you complete a lap, what to do?  |
| isRefresh         | Boolean  | Refresh the lap (Optional)            |
| isPause           | Boolean  | Default (true) pause time count       |

### Function callback of OnLapInteraction
| Prop              | Type     | Description                           |
|-------------------|----------|---------------------------------------|
| actualLap         | Number   | Lap actual                            |
| totalLaps         | Number   | Number of total laps                  |
| isFinish          | Boolean  | Interactions is finished              |
| timeInSeconds     | Number   | Time of lap                           |

---

# Thanks

Thanks for downloading, use wisely!
