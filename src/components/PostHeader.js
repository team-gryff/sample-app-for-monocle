import React from 'react';
import LeftSide from './LeftSide';
import TimePosted from './Time';




function PostHeader(props) {
  return (
    <div>
      <LeftSide
      name={props.name}
      location={props.location}
      profPictureURL={props.profPictureURL}
      />
      <TimePosted
        time={props.time}
      />
    </div>
  )
}




export default PostHeader;