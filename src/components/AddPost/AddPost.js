import React from "react";
import "./AddPost.css";
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div className="addPost">
      <div className="addPostContainer">
        <div className="addPostTop">
          <img src="/images/1.jpg" alt="" className="addPostPic" />
          <input placeholder="Whats in your mind..? " type="text" className="addPostInput" />
        </div>
        <hr className="postHr"/>
        <div className="addPostBottom">
          
            <div className="addPostOptions">
               <div className="addPostOption">
                      <PhotoSizeSelectActualIcon htmlColor='orange' className="addPhoto"/>
                     <span className="addPostOptionText">Add Photo or video</span>
                 </div>
                 <div className="addPostOption">
                      <AddLocationAltIcon htmlColor='red' className="addPhoto"/>
                     <span className="addPostOptionText">Add Location</span>
                 </div>
                 <div className="addPostOption">
                      <LocalOfferIcon htmlColor='blue' className="addPhoto"/>
                     <span className="addPostOptionText">Add tag</span>
                 </div>
                 <div className="addPostOption">
                      <LiveTvIcon htmlColor='tomato' className="addPhoto"/>
                     <span className="addPostOptionText">Go Live</span>
                 </div>

            </div>
            <button className="postButton">
                Post
            </button>
        </div>
      </div>
    </div>
  );
}
