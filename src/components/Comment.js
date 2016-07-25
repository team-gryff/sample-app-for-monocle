import React from 'react';


function Comment(props) {
  
  const commentStyle = {
    padding: '0 2%'
  }
  
  return(
    <p style={commentStyle}><strong>{props.name}</strong> : {props.comment}</p>
  )
}

export default Comment;