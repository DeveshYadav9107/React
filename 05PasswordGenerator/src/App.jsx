import { useCallback, useEffect, useState } from "react";

function GeneratePassword(){
  const [password,setPassword] = useState("dsfjhadshkj");
  const [length,setLength] = useState(8);
  const [numChanged,setNumChanged] = useState(false);
  const [charChanged,setCharChanged] = useState(false);

  const generatePassword = useCallback(()=>{
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numChanged){
      str += "0123456789";
    }
    if(charChanged){
      str += "!@#$%^&*()_+";
    }
    let pass = "";
    for(let i=0;i<length;i++){
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);

  }, [length, numChanged, charChanged]);
  // useCallback isliye use kra jata hai kyuki jab function ke andar koi state ya props ki value change hogi jse ki length numchanged charchanged to ye function dubara se create hoga vrna jo function phle same value ke lie create ho chuka hai vhi use hoga and dubara se create nahi hoga... or jb function mein value change hogi toh useEffect chlega (basically clouser ki wajah se ye hota hai) ... agr useCallback na use kre toh har baar function re-render hoga or har baar useEffect chlega.
  useEffect(()=>{
    generatePassword();
  },[generatePassword]);

  return (
    <>
      
      <h1>Password is : {password}</h1>
      <div>
        <input type= "range" min="8" max="20" value={length} onChange={(e)=>setLength(e.target.value)} />
        <label>Length({length})</label>

        <input type="checkbox" defaultChecked={numChanged} onChange={()=>setNumChanged(!numChanged)} />
        <label>Include Numbers</label>

        <input type="checkbox" defaultChecked={charChanged} onChange={()=>setCharChanged(!charChanged)} />
        <label>Include Characters</label> 
      </div>
    </>
  )
}

export default GeneratePassword;