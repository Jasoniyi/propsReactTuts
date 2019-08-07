import React from "react";

const CommentDetails = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.src} />
      </a>
      <div>
        <a href="/" className="author">
          {props.author}
        </a>
      </div>
      <div className="metadata">
        <span className="date"> {props.time}</span>
      </div>
      <div className="text">{props.post}</div>
    </div>
  );
};

export default CommentDetails;
