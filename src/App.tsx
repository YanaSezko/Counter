import React, {useState,ChangeEvent} from 'react';
import Button1 from "./components/Button1";
import "./App.css"

function App() {
    let[value, setValue] = useState(0);
    let[maxValue,setMaxValue]=useState(0)
    let[startValue,setStartValue]=useState(0)

    function addValue() {
       setValue(++value)
    }
    function changeDisRes() {
        setValue(0)
    }

    let changeValueMax = (e: ChangeEvent<HTMLInputElement>)=> {
        let maxValue=e.currentTarget.value
        setMaxValue(Number(maxValue))
        localStorage.setItem("maxValue",maxValue)
   
    }


    let changeValueStart=(e: ChangeEvent<HTMLInputElement>)=>{
        let startValue=e.currentTarget.value
        setStartValue(Number(startValue))
        localStorage.setItem("startValue",startValue)
   } 

   debugger
   const setInputValue=(startValue:any,maxValue:any)=>{
  value=startValue
  setValue(value)

  if(value>=maxValue){
      alert("error")
  }

   }

    return (
        <div className={"App"}>
            <span className={(value===maxValue? "red" : "" )}>{value}</span>
            <div className={"wrapper"}>
                <Button1 id={1} value={value} addValue={addValue} maxValue={maxValue}/>
                <Button1 id={2} value={value} changeDisRes={changeDisRes}/>
                <Button1 id={3} value={value} onClick={()=>{setInputValue(startValue,maxValue)}}/>
            </div>
            start<input type="number" min={startValue} max={maxValue} step={1} onChange={changeValueStart} /><br/>
            max<input type="number" min={startValue} max={maxValue}  step={1} onChange={changeValueMax}  />
           
            
        </div>

    );
}


export default App;

