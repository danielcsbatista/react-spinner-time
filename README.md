[![NPM](https://img.shields.io/npm/v/react-select.svg)](https://www.npmjs.com/package/react-spinner-timer)

# React-Spinner-Timer

The React Spinner Timer for [React](https://reactjs.com).

# Component

![React Spinner Timer](https://github.com/danielcsbatista/react-spinner-time/blob/assets/exempleSpinnerTimer.gif)

# Installation and usage

To install React Spinner Timer you can run:

```
yarn add react-spinner-time

or

npm install react-spinner-time
```

To use:

```js
import React from "react";
import ReactSpinnerTimer from "react-spinner-timer";

function App() {
  const handleChange = () => {
    console.log("oh yeah!!!");
  };
  return (
    <ReactSpinnerTimer
      timeInSeconds={60}
      totalLaps={60}
      isRefresh={true}
      onLapInteraction={handleChange}
    />
  );
}
export default App;

```

## Props

Common props you need to specify:

- `timeInSeconds` - time to show a component lap
- `totalLaps` - total laps
- `onLapInteraction` - when you complete a lap, what to do?
- `isRefresh` - show component(Optional)

# Thanks

Thanks for downloading, use wisely!
