import { useMemo, useState } from "react"
import Fibonacci from "./components/Fibonacci.jsx";
import ColorFul from "./components/ColorFul.jsx"

function App() {
    const [count,setCount] = useState(0);
    const [number,setNumber] = useState(null);

    // const fib = Fibonacci(number);
    // if i write like this then jb bhi function re-render hoga like count ko increase kra ya any other function use hua jisse re render hota hai toh fibonacci dubara call hoga jisse ki code ki time complexcity bdhegi isse bchne ke lie hamare paas 2 hooks hai phle useEffect joki bht hi common hai ... useEffect code ke end m execute hota hai toh vo bhi apni ek call krega re render krne ki ... 2nd hook hai useMemo usse function dubara re-render nhi krega basically ek baar km render hoga useMemo se as compare to useEffect

    const fib = useMemo(() => Fibonacci(number), [number]);
    return (
      <>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" , backgroundColor:"black", color:"white"}}>
          <h1>Count is: {count}</h1>
          <button onClick={()=>setCount(count+1)}>Increment {count}</button>
          <button onClick={()=>setCount(count-1)}>Decrement {count}</button>
        </div>

        <h2 style={{color:"white"}}>Fibonacci number is : {fib}</h2>
        <input type="number"  placeholder="Enter a number between 0 and 40" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
        <ColorFul/> 
        {/* jb setCount chlta hai toh sara function render hota hai dubara se toh ColorFul vala function hai vo bhi bar bar chlna chahiye ... iss problem se bchne ke lie hmne ColorFul vale funciton mein "React.memo" use kiya hai joki ek hook hai */}
        {/* But agr m chata hu kuch specific time pr ye function bhi chle toh mujhe isme props paas krne pdenge joki change vo not constant props like jse count bhj dia jo chnage horha hai toh jb jb count change hoga ye function chlega */}
        

      </>
  )
}

export default App
