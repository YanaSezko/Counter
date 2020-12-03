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
        setValue(startValue)
    }  

    let changeValueMax = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(0)
        let maxValue = e.currentTarget.value
        setMaxValue(+maxValue)
        localStorage.setItem("maxValue", maxValue)

        let localMaxValue = localStorage.getItem("maxValue");
        console.log(localMaxValue)

        if (Number(maxValue) === 0) {
            setError("Введите значения и нажмите Set")
        } else setError('')
    }

    let changeValueStart = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(0)
        let startValue = e.currentTarget.value
        setStartValue(+startValue)
        localStorage.setItem("startValue", startValue)
        let localStartValue = localStorage.getItem("startValue");
        console.log(localStartValue)
    }

    const setInputValue = (startValue: number, maxValue: number) => {
        setValue(startValue)
        if (startValue === maxValue) {
            setError("Значения не должны быть одинаковыми")
            setValue(0)
        }
        if (maxValue < startValue) {
            setError("Максимальное значение не должно быть меньше Стартового!");
            setValue(0)
        }
        if (maxValue < 0 || startValue < 0) {
            setError("Значения не могут быть отрицательными");
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
                <div className={"buttonWrapper wrapper"}>
                    <Button id={3} value={value} onClick={() => { setInputValue(startValue, maxValue) }} />
                </div>
            </div>
            <div className={"wrapper"}>
                {error && <span className={(maxValue <= startValue || value === maxValue || !maxValue || !startValue|| startValue < 0 || maxValue < 0 ? "red" : "")}>{error}</span>}
                {!error && <span className={(value === maxValue  ? "red" : "")}>{value}</span>}
                <div className={"buttonWrapper wrapper"}>
                    <Button id={1} value={value} addValue={addValue} maxValue={maxValue} startValue={startValue} />
                    <Button id={2} value={value} changeDisRes={changeDisRes} />
                </div>
            </div>
        </div>
    );
}

export default App;

