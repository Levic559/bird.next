function ButtonLeviUI({ 
  
  width=50, height=50,borderRadius=50,color=grey,fontSize1=24,fontSize2=16,

}){
  return` 
    <div>
      <input type ="button"  style=
      "width:${width}px,
        height:${height}px,
        borderRadius:${borderRadius}%,
        backgroundColor:pink,
        color:${color},
        fontSize:${fontSize2}px,
      "> <h3><span style="
        fontSize:${fontSize1}px
      ">Levi</span> UI</h3></input>
    
    </div>
  `
}


function AvatarUI({ 
  url="https://placekitten.com/100/100", 
  width=100, height=100

}){
  return (
    <div>
      <img  style={{
        width: width ,
        height:height ,
        objectFit:"cover",
        borderRadius:50
      }}src={url}/>
    </div>
  )
}

export default ButtonLeviUI;
export  {AvatarUI};