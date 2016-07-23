import React from 'react';


function Comment(props) {
  return(
    <p>{props.name} : {props.comment}</p>
  )
}

export default Comment;