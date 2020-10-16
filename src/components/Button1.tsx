import React from 'react';

type ButtonPropsType = {
    id: number
    value: number
    addValue?: any
    changeDisRes?: any
}

const Button1 = (props: ButtonPropsType) => {

    return (
        <div>
            {props.id === 1 && <button onClick={props.addValue} disabled={props.value >= 5} >inc</button>}
            {props.id === 2 && <button onClick={props.changeDisRes} disabled={props.value<=0}>reset</button>}
        </div>
    );
}


export default Button1;
