function ButtonLeviUI({ 
  
  width=100, height=50,borderRadius="50%",color:grey,

}){
  return (
    <div>
      <Button  style=
      {{width:width,
        height:height,
        borderRadius:borderRadius,
        backgroundColor:pink,
        color:color
      }}> <h3>LeviUI</h3>      </Button>
    </div>
  )
}