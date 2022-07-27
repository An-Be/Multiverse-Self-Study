import { useState } from "react"
const Counter = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount)

    const increment = () => setCount((prev) => prev + 1);
    const decrememnt = () => setCount((prev) => prev - 1);
    const restart = () => setCount(0);
    const switchSigns = () => setCount((prev) => prev * -1);
    return(
        <div>
            <h1>
                Count: <h2 data-testid="count">{count}</h2>
            </h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrememnt}>Decrement</button>
                <button onClick={restart}>Restart</button>
                <button onClick={switchSigns}>Switch Signs</button>
            </div>
        </div>

    )
}
export default Counter;