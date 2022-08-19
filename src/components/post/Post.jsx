import { Users } from '../../dummyData';
import { MdMoreVert } from 'react-icons/md';
import './Post.css';
import { useState } from 'react';

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { desc, photo, date, like, comment, userId } = post;
  const [likeCount, setLikeCount] = useState(like);

  const handleLike = () => {
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    setIsLiked(!isLiked);
  };

  // Find username and profile picture by id
  const username = Users.filter(user => user.id === userId)[0].username;
  const profilePicture = Users.filter(user => user.id === userId)[0]
    .profilePicture;

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={profilePicture}
              alt="postProfileImage"
              className="postProfileImage"
            />
            <span className="postUsername">{username}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MdMoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc && desc}</span>
          <img src={photo} alt="postImage" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/like.png"
              alt="postLike"
              onClick={handleLike}
            />
            <img
              className="likeIcon"
              src="/assets/heart.png"
              alt="postHeart"
              onClick={handleLike}
            />
            <span className="postLikeCounter">Liked by {likeCount} people</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
