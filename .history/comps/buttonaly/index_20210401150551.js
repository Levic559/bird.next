function ButtonAlyUI({ 
  
    width=100, height=60,borderRadius="50%",color:Blue,fontSize4 = 20,
  
  }){
    return (
      <div>
          <h3>This is my component</h3>  
          <span>SheraliComponent</span>
        <button type = "Button"  style=
        {{width:width,
          height:height,
          fontSize: fontSize4,
          borderRadius:borderRadius,
          backgroundColor:"red",
          color:"color"
        }}>     </buton>
      </div>
    )
  }
  export default ButtonAlyUI;
