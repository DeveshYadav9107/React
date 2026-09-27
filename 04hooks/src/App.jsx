import { useState } from "react"
import ColorFul from "./components/ColorFul.jsx"

function App() {
    let [count,setCount] = useState(0);

    return (
      <>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" , backgroundColor:"black", color:"white"}}>
          <h1>Count is: {count}</h1>
          <button onClick={()=>setCount(count+1)}>Increment {count}</button>
          <button onClick={()=>setCount(count-1)}>Decrement {count}</button>
        </div>

        <ColorFul/> 
        {/* jb setCount chlta hai toh sara function render hota hai dubara se toh ColorFul vala function hai vo bhi bar bar chlna chahiye ... iss problem se bchne ke lie hmne ColorFul vale funciton mein "React.memo" use kiya hai joki ek hook hai */}
        {/* But agr m chata hu kuch specific time pr ye function bhi chle toh mujhe isme props paas krne pdenge joki change vo not constant props like jse count bhj dia jo chnage horha hai toh jb jb count change hoga ye function chlega */}
        
      </>
  )
}

export default App
