import React from 'react';


function LeftSide(props) {
  
  const headerStyle = {
    display: 'inline',
  }

  const profNameStyle={
     display: 'inline-block',
     fontFamily: 'Helvetica Neue',
     float: 'left',
     margin: '3% 0',
  }

  const profPicStyle = {
    height: '50px',
    width: '50px',
    display: 'inline',
    borderRadius: '50%',
    border: '1px solid #dbdbdb',
    boxSizing: 'border-box',
    float: 'left',
    margin: '1% 2%',
  }
  
  return (
    <div style={headerStyle}>
      <img style={profPicStyle} src={props.profPictureURL}></img>
      <div style={profNameStyle}> {props.name} </div>
    </div>
  )
}




export default LeftSide;