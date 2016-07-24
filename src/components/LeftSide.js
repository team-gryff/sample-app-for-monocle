import React from 'react';


function LeftSide(props) {
  
  const leftSideStyle={
     display: 'inline',
     float: 'left',
     fontFamily: 'Helvetica Neue',
     padding: '2% 2%'
  }
  
  return (
    <div style={leftSideStyle}> 
      {props.profPictureURL} {props.name} 
    
    </div>
  )
}




export default LeftSide;