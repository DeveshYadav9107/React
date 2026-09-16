import Header from "./components/Header";
import Card from "./components/Card";
import detailsOfCard from "./utils/detailsOfCard";

function App() {

  return (
    <> 
      <Header></Header>
      <div style={{display: "flex" , gap: "10px", flexWrap : "wrap"}}>
        {/* <Card  cloth="T-Shirt" offer="20%"/>
        <Card  cloth="Jeans" offer="20%"/>
        <Card  cloth="" offer="20%"/>
        <Card  cloth="T-Shirt" offer="20%"/>
        <Card  cloth="T-Shirt" offer="20%"/>
        <Card  cloth="T-Shirt" offer="20%"/> */}

        {
          detailsOfCard.map((value,index)=>{
            return <Card cloth = {value.cloth} offer = {value.offer}/>
          })  // we used map beacuse it returns an array and in JSX we only write those things inside which returns something like string , numbers , array etc. Not complex things like objects or functions and to use objects we use {with name of property} and to use functions we use {functionName()}  
        }  {/* hmne yeh {} isliye use kre hai ki JSX ko pta chal jaye ki {} iske andr JavaScript ka exprssion hai usko execute kro */}
      </div>
    </>
  )
}

export default App
