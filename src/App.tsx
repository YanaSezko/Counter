import React, { useState, ChangeEvent } from 'react';
import Button from "./components/Button";
import "./App.css"

function App() {
    let [value, setValue] = useState(0);
    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [error, setError] = useState("Ошибка")

    function addValue() {
        setValue(++value)
    }
    function changeDisRes() {
        setValue(0)
    }

    let changeValueMax = (e: ChangeEvent<HTMLInputElement>) => {
        // setMaxValue(0)
        let maxValue = e.currentTarget.value
        setMaxValue(Number(maxValue))
        localStorage.setItem("maxValue", maxValue)

    }


    let changeValueStart = (e: ChangeEvent<HTMLInputElement>) => {
        //setStartValue(0)
        let startValue = e.currentTarget.value
        setStartValue(Number(startValue))
        localStorage.setItem("startValue", startValue)
    }

    debugger
    const setInputValue = (startValue: any, maxValue: any) => {
        value = startValue
        setValue(value)
        if (value >= maxValue) {
            alert("error")
        }

    }

    return (
        <div className={"App"}>

            <span className={(value === maxValue ? "red" : "")}>{value}</span>

            <div className={"wrapper"}>
                <Button id={1} value={value} addValue={addValue} maxValue={maxValue} />
                <Button id={2} value={value} changeDisRes={changeDisRes} />
                <Button id={3} value={value} onClick={() => { setInputValue(startValue, maxValue) }} />
            </div>
            <div className={"inputWrapper"}>
                <p>start <input type="number" step={1} onChange={changeValueStart} /></p>
                <p>max <input type="number" step={1} onChange={changeValueMax} /></p>
            </div>
        </div>

    );
}

export default App;

