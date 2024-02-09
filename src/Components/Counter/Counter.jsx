import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
   return(
    <div>
        <p>{count}</p>
        <div>
            <button onClick={() => (setCount(count + 1))}>Increment +1</button>
            <button onClick={() => (setCount(count - 1))}>Decrement -1</button>
        </div>
        <button onClick={() => (setCount(0))}>Reset counter</button>
    </div>
   ) 



}
export default Counter