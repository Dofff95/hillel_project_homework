import { useState } from "react";

const PizzasCounter = () => {
    const [count, setCount] = useState(0);
         const [isVisible, setisVisible] = useState(false);
    return (
        <div>
            {count == 0 ? <button  className={CSS.button} onClick={() => {setCount(count + 1); setisVisible(!isVisible)}}>Add to cart</button>
            :
            <div>
             {count > 1 ? <button onClick={() => (setCount(count - 1))}>-1</button>
            : <button disabled onClick={() => (setCount(count - 1))}>-1</button> }
            <span>{count}</span>
            <button onClick={() => (setCount(count + 1))}>+1</button>
            <button onClick={() => (setCount(0))}>Delete</button>
            </div>}
            
        </div>
    )
}
export default PizzasCounter