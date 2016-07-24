import React from 'react';


function Time(props) {
  
  const timeStyle = {
    display: 'inline',
    float: 'right',
    fontFamily: 'Helvetica Neue',
    verticalAlign: 'middle',
    padding: '2% 2%'
  }
  
  return (
    <div style={timeStyle}> {props.time}h </div>
  )
}




export default Time;