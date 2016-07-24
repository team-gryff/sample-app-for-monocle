import React from 'react';
import PostHeader from './PostHeader';
import InstaPicture from './InstaPicture';
import CommentContainer from './CommentContainer';

function Post(props) {

  const PostStyle = {
    marginTop: '40px',
    marginBottom: '40px',
    border: '2px solid #EFEFEF',
  }


  return (
    <div style={PostStyle}>
    <PostHeader
      name={props.name}
      location={props.location}
      profPictureURL={props.profPictureURL}
      time={props.time}
     />
     <InstaPicture
      pictureURL={props.pictureURL}
      likePicture={props.likePicture}
     />
     <CommentContainer
      name={props.name}
      likes={props.likes}
      liked={props.liked}
      caption={props.caption}
      comments={props.comments}
      handleChange={props.handleChange}
      handleSubmit={props.handleSubmit}
      likePicture={props.likePicture}
      commentBoxValue={props.commentBoxValue}
     />
    </div>
  )
}

// class Post extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return(
//       <div>
//         <PostHeader
//           name={props.name}
//           location={props.location}
//           profPictureURL={props.profPictureURL}
//           time={props.time}
//         />
//         <InstaPicture
//             pictureURL={props.pictureURL}
//             likePicture={props.likePiture}
//         />
//         <CommentContainer
//           name={props.name}
//           caption={props.caption}
//           comments={props.comments}
//           handleChange={props.handleChange}
//           handleSubmit={props.handleSubmit}
//           commentBoxValue={props.commentBoxValue}
//         />
//         </div>
//     )
//   }
// }

export default Post;
