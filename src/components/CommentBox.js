import React from 'react';

function CommentBox(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          placeholder="Add a comment..."
          onChange={props.handleChange}
          value={props.commentBoxValue}
        />
      </form>
    
    </div>
  )

}


export default CommentBox;