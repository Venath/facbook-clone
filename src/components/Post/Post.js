import React from "react";
import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <img src="/images/1.jpg" alt="" className="postImage" />
          <span className="postUserName">Venath Randima</span>
          <span className="postTime">10 mins ago</span>
        </div>
        <div className="postCenter">
            <div className="postCaption">
                Hello I am Venath
            </div>
            <img src="/images/1.jpg" alt="" className="postedImage" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
<img src="/images/facbookLikes.jpg" alt="" className="reactionPic" />
<img src="/images/facbookLikes.jpg" alt="" className="reactionPic" />
<img src="/images/facbookLikes.jpg" alt="" className="reactionPic" />
<span className="likeCount">10 </span>
            </div>
            
            <div className="postBottomRight">
                <span className="commentCount">20 comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
