import React from 'react';
import LeftSide from './LeftSide';
import TimePosted from './Time';




function PostHeader(props) {

   const postHeaderStyle = {
     backgroundColor: '#FFFFFF',
     textAlign: 'center',
     height: '60px',
     padding: '1% 0'
   } 

  return (
    <div style={postHeaderStyle}>
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