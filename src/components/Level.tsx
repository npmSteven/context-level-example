import { useContext } from "react"
import { LevelContext } from "../contexts/LevelContext"

export const Level = () => {
    const {
        level,
        resetLevel,
        increaseLevel,
        decreaseLevel,
    } = useContext(LevelContext);
    
    return (
        <div>
            <div>Current Level: {level}</div>
            <button onClick={increaseLevel}>Increase</button>
            <button onClick={decreaseLevel}>Decrease</button>
            <button onClick={resetLevel}>Reset</button>
        </div>
    )
}