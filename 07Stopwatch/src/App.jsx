import { useRef, useState } from 'react'

function App() {
  const [time,setTime] = useState(0);
  const intervalRef = useRef(null);
  const [isRunning,setisRunning] = useState(false);

  function start(){
    if(!isRunning){
      intervalRef.current = setInterval(()=>{
        setTime((prevTime) => prevTime + 1)
      },1000);
      setisRunning(true);
    }
  }

  //idhr isRunning isliye use hua hai kyoki agr bar bar start pr click kra jayega toh bht sare setInterval call ho jayenge jisse time fast forward ho jayega isliye sirf ek bar hi setInterval chlna chahiye

  // hmne intervalRef ko isliye lia hua kyoki jb bhi function re-render hoga toh intervalRef ka value null ho jayega isliye useRef ka use kiya hai jisse ki vo apna value ko preserve krega re-render ke baad bhi(iska ek example ye lelo ki ek counter bnaya hmne and ek money naam ka simple variable bnaya joki abhi 0 hai and hmne usko increase kra click krke 5 bar basically ab money ki value 5 hogyi hai and mne counter mein count ko ek se increase kra then money ko increase kra toh money ki value 6 honi chahiye thi but ab vo firse 0 se start hogi iss problem se bchne ke lie useRef ka use kiya jisse ki vo money ka reference store krle) idhr bhi hmne jo setInterval ek bar chlna chahiye tha uska reference store krlia jisse ki usko start or stop kra ja ske.

  function stop(){
    if(isRunning){
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setisRunning(false);
    }
  }
  function reset(){
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }
  return(
    <>

      <div>
        <h1>StopWatch</h1>
        <h2>Time : {time}</h2>
        <button onClick={start} >Start</button>
        <br />
        <button onClick={stop}>Stop</button>
        <br />
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
