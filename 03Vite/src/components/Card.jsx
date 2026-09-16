export default function Card(props){
  return (
    <div  style={{border : "2px solid black"}}>
      <img src="" alt="" />
      <div>
        <h3>{props.cloth}</h3>
        <h2>{props.offer}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
  // footer
}