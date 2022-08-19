import { FaPhotoVideo } from 'react-icons/fa';
import { MdLocationOn, MdOutlineEmojiEmotions } from 'react-icons/md';
import { AiOutlineTags } from 'react-icons/ai';
import './Share.css';

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="./assets/users/3.jpeg"
            className="shareProfileImg"
            alt="userImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="What's on your mind?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <FaPhotoVideo color="tomato" className="shareOptionIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <AiOutlineTags color="blue" className="shareOptionIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <MdLocationOn color="green" className="shareOptionIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <MdOutlineEmojiEmotions
                color="goldenrod"
                className="shareOptionIcon"
              />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};
export default Share;
