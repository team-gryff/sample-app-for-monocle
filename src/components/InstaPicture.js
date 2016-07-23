import React from 'react';


function InstaPicture(props) {
  return(
    <div>
      <img onDoubleClick={props.likePicture} src={props.pictureURL} width="100%"></img>
    </div>
  )



}

export default InstaPicture;
