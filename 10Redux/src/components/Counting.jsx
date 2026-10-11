import { useSelector, useDispatch } from "react-redux";
import { Decrement, Increment } from "./Slicer1";

export default function Counting(){
    const count = useSelector((state) => state.slicer1.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Count is : {count}</h1>
            <button onClick={() => dispatch(Increment())}>Increment</button>
            <button onClick={() => dispatch(Decrement())}>Decrement</button>
        </div>
    )
}