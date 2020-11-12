import React, { useState, ChangeEvent } from 'react';
import Button from "./components/Button";
import "./App.css"

function App() {
    let [value, setValue] = useState(0);
    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [error, setError] = useState("Введите значения и нажмите Set")

    function addValue() {
        setValue(++value)
    }
    function changeDisRes() {
        setValue(0)
    }

    let changeValueMax = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = e.currentTarget.value
        setMaxValue(Number(maxValue))
        localStorage.setItem("maxValue", maxValue)
        if (startValue === 0) {
            setError("Введите значения и нажмите Set")
        } else setError('')
    }

    let changeValueStart = (e: ChangeEvent<HTMLInputElement>) => {
        //setStartValue(0)
        let startValue = e.currentTarget.value
        setStartValue(Number(startValue))
        localStorage.setItem("startValue", startValue)
        if (maxValue === 0) {
            setError("Введите значения и нажмите Set")
        } else setError('')
    }

    const setInputValue = (startValue: number, maxValue: number) => {
        value = startValue
        setValue(value)
        if (value >= maxValue) {
            setError("Введите корректные значения.Они не должны быть равными")
            setValue(0)
        }
        if (maxValue < startValue) {
            setError("Максимальное значение не должно быть меньше Стартового!");
            setValue(0)
        }

    }

    return (
        <div className={"App"}>
            <div className={"wrapper"}>
                <div>
                    <p>start <input type="number" step={1} onChange={changeValueStart} /></p>
                    <p>max <input type="number" step={1} onChange={changeValueMax} /></p>
                </div>
                <div  className={"buttonWrapper wrapper"}>
                    <Button id={3} value={value} onClick={() => { setInputValue(startValue, maxValue) }} />
                </div>
            </div>
            <div className={"wrapper"}>
                {error && <span className={(maxValue <= startValue || value === maxValue ? "red" : "")}>{error}</span>}
                {!error && <span className={(maxValue <= startValue || value === maxValue ? "red" : "")}>{value}</span>}
                <div  className={"buttonWrapper wrapper"}>
                    <Button id={1} value={value} addValue={addValue} maxValue={maxValue} startValue={startValue} />
                    <Button id={2} value={value} changeDisRes={changeDisRes} />

                </div>
            </div>

        </div>

    );
}

export default App;

