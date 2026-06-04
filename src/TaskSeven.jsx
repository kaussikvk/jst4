import React, { useRef, useState } from "react";
import "./TaskSeven.css";

function Taskseven() {
  const fileInputRef = useRef(null);

  const [profileImage, setProfileImage] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }

    setLiked(!liked);
  };

  const handleAddComment = () => {
    if (comment.trim() === "") return;

    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="app">
      <div className="profile-card">
        <h2 className="title">Profile Upload Card</h2>

        <div className="profile-section">
          <div className="profile-image-box" onClick={handleImageClick}>
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile Preview"
                className="profile-image"
              />
            ) : (
              <div className="placeholder">
                <p>Upload Profile Picture</p>
              </div>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            hidden
          />
        </div>

        <div className="like-section">
          <button
            className={`like-button ${liked ? "liked" : ""}`}
            onClick={handleLike}
          >
            ♥ Like
          </button>

          <span className="like-count">{likeCount} Likes</span>
        </div>

        <div className="comment-section">
          <h3>Comments</h3>

          <div className="comment-input-box">
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button onClick={handleAddComment}>Add</button>
          </div>

          <div className="comments-list">
            {comments.map((item, index) => (
              <div key={index} className="comment-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taskseven;