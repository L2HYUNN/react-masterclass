import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./components/atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  return (
    <>
      <input
        type="number"
        value={minutes}
        onChange={onMinutesChange}
        placeholder="minutes"
      />
      <input type="number" value={hours} placeholder="hours" />
    </>
  );
}

export default App;
