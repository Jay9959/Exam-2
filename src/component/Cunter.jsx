import { useState } from "react";
import './Cunter.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>

            <h1>Counter</h1>
            <h2>{count}</h2>
            <button disabled={count == 0} onClick={() => setCount(count - 1)}>-</button>
            <button disabled={count == 0} onClick={() => setCount(0)}>Reset Number</button>
            <button disabled={count == 15} onClick={() => setCount(count + 1)}>+</button>

        </div>
    )
}

export default App;