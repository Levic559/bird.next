function ButtonAdrianUI({ 
  
    width="200px", height="200px",borderRadius="20px",color="yellow",
  
  }){
    return (
      <div>
        <input type="button"  style=
        {{width:width,
          height:height,
          borderRadius:borderRadius,
          color:color
        }}> 
        
        </input>
        <span style="position: inline;">hello this is adrians component</span>
        <h3>Adrian's component</h3> 
      </div>
    )
  }

  export default ButtonAdrianUI;
