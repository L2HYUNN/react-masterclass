import React from "react";
import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./components/atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <>
      <input
        type="number"
        value={minutes}
        onChange={onMinutesChange}
        placeholder="minutes"
      />
      <input
        type="number"
        value={hours}
        onChange={onHoursChange}
        placeholder="hours"
      />
    </>
  );
}

export default App;
