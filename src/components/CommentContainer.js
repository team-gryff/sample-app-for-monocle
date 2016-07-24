import React from 'react';
import CommentBox from './CommentBox';
import Comment from './Comment';


function CommentContainer(props) {
  const comments = props.comments.map((ele, i) => {
    return <Comment
      key={i + 1}
      name={ele.name}
      comment={ele.comment}
    />
  })

  const likesStyle = {
    padding: '1% 2%'
  }

  return (
    <div>
      <p style={likesStyle}>{props.likes} likes</p>
      <Comment 
      key={0}
      name={props.name}
      comment={props.caption}
      />
      {comments}
      <CommentBox
        liked={props.liked}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        likePicture={props.likePicture}
        commentBoxValue={props.commentBoxValue}
      />
    </div>
  )
}



export default CommentContainer;