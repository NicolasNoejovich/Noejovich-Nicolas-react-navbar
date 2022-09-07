import { useState } from "react";


const Counter = ({titulo}) => {
    const [inicialCount, setInicialCount] = useState(0)


const suma = () => {
    setInicialCount(inicialCount + 1);

}

const resta = () => {
    setInicialCount(inicialCount - 1);

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