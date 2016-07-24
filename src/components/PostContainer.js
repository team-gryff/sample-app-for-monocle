import React, { Component } from 'react';
import fauxData from '../../fauxData';
import Post from './Post';


export default class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    if (this.state.posts.length === 0) {
      const liked = [];
      const commentBox = [];

      for (let i = 0; i < fauxData.posts.length; i++) {
        liked.push(false);
        commentBox.push('');
      }
      return this.setState({
        username: fauxData.username,
        posts: fauxData.posts,
        liked,
        commentBox,
      });
    } 
  }

  likePicture(i) {
    const bool = !this.state.liked[i];
    const liked = this.state.liked;
    liked[i] = bool;

    const changed = Object.assign({}, this.state.posts[i]);
    if (bool) changed.likes++
    else changed.likes--;

    const result = this.state.posts;
    result[i] = changed
    return this.setState({ posts: result, liked });
  }

  handleChange(i, e) {
    e.preventDefault();
    const arr = this.state.commentBox;
    arr[i] = e.target.value
    return this.setState({commentBox: arr});
  }

  handleSubmit(i, e) {
    e.preventDefault();
    if (this.state.commentBox[i] === '') return;
    const changed = Object.assign({}, this.state.posts[i]);
    changed.comments.push({
      name: this.state.username,
      comment:this.state.commentBox[i],
    });
    const result = this.state.posts;
    const commentBox = this.state.commentBox;
    commentBox[i] = ''
    result[i] = changed;
    this.setState({posts: result, commentBox});
  }
  
  render() {
    const renderArr = this.state.posts.map((ele, i) => {
      return (<Post
        key={i}
        name={ele.name}
        location={ele.location}
        time={ele.time}
        pictureURL={ele.pictureURL}
        profPictureURL={ele.profPictureURL}
        likes={ele.likes}
        liked={this.state.liked[i]}
        caption={ele.caption}
        comments={ele.comments}
        commentBoxValue={this.state.commentBox[i]}
        likePicture={this.likePicture.bind(this, i)}
        handleChange={this.handleChange.bind(this, i)}
        handleSubmit={this.handleSubmit.bind(this, i)}
      />)
    })

    const postContainerStyle = {
      width: '50%',
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '20px',
      marginBottom: '20px'
    }

    return (
      <div style={postContainerStyle}>
        {renderArr}
      </div>
    )

  }
}
