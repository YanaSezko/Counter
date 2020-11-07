import React from 'react';

type ButtonPropsType = {
    id: number
    value:number
    addValue?: ()=>void
    changeDisRes?: ()=>void
    onClick?:any
    maxValue?:any

}

const Button1 = (props: ButtonPropsType) => {

    return (
        <div>
            {props.id === 1 && <button onClick={props.addValue} disabled={props.value >= props.maxValue} >inc</button>}
            {props.id === 2 && <button onClick={props.changeDisRes} disabled={props.value<=0}>reset</button>}
            {props.id === 3 && <button onClick={props.onClick} >set</button>}
        </div>
    );
}


export default Button1;
