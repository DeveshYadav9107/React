function Header(){
  return(
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <img src="https://logodix.com/logo/1633996.png" alt="Myntra" height={"80px"} width={"80px"}/>
      <div className="options" style={{display : "flex", gap : "10px"}}>
        <button  style={{border:"none", backgroundColor :"white"}}>Men</button>
        <button style={{border:"none", backgroundColor:"white"}}>Women</button>
        <button style={{border:"none", backgroundColor:"white"}}>Kids</button>
        <button style={{border:"none", backgroundColor:"white"}}>Beauty</button>
        <button style={{border:"none",backgroundColor:"white"}}>Studio</button>
      </div>
      <input placeholder="Search for products and more" style={{marginTop: "25px", height: "20px", width: "800px" }} />  
      <div className="Profile" style={{display : "flex", gap : "10px"}}>
        <button style={{border:"none", backgroundColor:"white"}}>Profile</button>
        <button style={{border:"none", backgroundColor:"white"}}>Wishlist</button>
        <button style={{border:"none", backgroundColor:"white"}}>Bag</button>
      </div>
    </div>
  );
}


export default Header;