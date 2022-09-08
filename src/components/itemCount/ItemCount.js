import { useState } from "react";


let stock = 6;
let min = 1;

const Counter = ({titulo}) => {
    const [inicialCount, setInicialCount] = useState(0)


const suma = () => {
    if(inicialCount < stock){
        
        setInicialCount(inicialCount + 1);
    }else{
        alert="no hay mas stock"
    }
}

const resta = () => {    
    if(inicialCount < min){
    alert="stock agotado"
}else{
    setInicialCount(inicialCount - 1);
}

}

return (
    <div>
        Counter
        <h3>{inicialCount}</h3>
        <button onClick={resta}>-</button>
        <button onClick={suma}>+</button>

    </div>
);
};
export default Counter;