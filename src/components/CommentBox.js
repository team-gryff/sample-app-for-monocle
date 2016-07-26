import React from 'react';

function CommentBox(props) {
  
  const commentBoxStyle = {
    width: 'calc(100% - 99px)',
    height: '44px',
    border: 'none',
    fontFamily: 'Helvetica Neue',
    fontSize: '15px',
    display: 'inline',
    paddingLeft: '10px'
  }

  const heartOn = {
    backgroundImage: 'url(http://instagramstatic-a.akamaihd.net/h1/sprites/core/3a91ff.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-423px -321px',
    width: '24px',
    height: '24px',
    margin: '10px',
    display: 'inline',
    float: 'left',
    backgroundColor: '#FFFFFF'
  }

  const heartOff = {
    backgroundImage: 'url(http://instagramstatic-a.akamaihd.net/h1/sprites/core/3a91ff.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-449px -321px',
    width: '24px',
    height: '24px',
    margin: '10px',
    display: 'inline',
    float: 'left',
    backgroundColor: '#FFFFFF'
  }

  const dotsStyle = {
    backgroundImage: 'url(http://instagramstatic-a.akamaihd.net/h1/sprites/core/3a91ff.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-642px -268px',
    width: '44px',
    height: '45px',
    display: 'inline',
    float: 'right',
    backgroundColor: '#FFFFFF'
  }


  return (
    <div textAlign='center'>
      <div style={!props.liked ? heartOn : heartOff} onClick={props.likePicture}></div>
        <form onSubmit={props.handleSubmit}>
          <input
            style={commentBoxStyle}
            className="commentBox"
            type="text"
            placeholder="Add a comment..."
            onChange={props.handleChange}
            value={props.commentBoxValue}
          />
      <div style={dotsStyle}></div>
      </form>
    
    </div>
  )

}


export default CommentBox;