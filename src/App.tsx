import React, {useState} from 'react';
import Button1 from "./components/Button1";
import "./App.css"


function App() {
    let [value, setValue] = useState(0);

    function addValue() {
       setValue(++value)
    }
    function changeDisRes() {
        setValue(0)
    }
    return (
        <div className={"App"}>
            <span className={(value===5?"red":"")}>{value}</span>
            <div className={"wrapper"}>
                <Button1 id={1} value={value} addValue={addValue} />
                <Button1 id={2} value={value} changeDisRes={changeDisRes}/>
            </div>
        </div>

    );
}

export default App;
