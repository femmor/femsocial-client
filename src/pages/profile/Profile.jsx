import { Sidebar, Feed, RightBar } from '../../components';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              src="/assets/post/7.jpeg"
              alt="profileCoverImg"
              className="profileCoverImg"
            />
            <img
              src="/assets/users/1.jpeg"
              alt="profileUserImg"
              className="profileUserImg"
            />
          </div>
          <div className="profielInfo">
            <h4 className="profileInfoName">Suzan Lee</h4>
            <span className="profileInfoDesc">Hello my friends!</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed />
          <RightBar profile />
        </div>
      </div>
    </div>
  );
};
export default Profile;
