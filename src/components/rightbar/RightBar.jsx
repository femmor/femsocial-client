import { Online, Ads } from '../../components';
import './Rightbar.css';

const RightBar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            src="/assets/gift.png"
            alt="birthdayImg"
            className="birthdayImg"
          />
          <span className="birthdayText">
            <b>Ben Foster</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <Ads />
        <h4 className="rightbatTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <Online />
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rigthbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Spain</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rigthbarTitle">User Friends</h4>
        <div className="rigthbarFollowings">
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/users/1.jpeg"
              alt="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Kenardo</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/users/1.jpeg"
              alt="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Bola Oladare</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/users/2.jpeg"
              alt="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Gideon Wisdom</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/users/3.jpeg"
              alt="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Kevin Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/users/4.jpeg"
              alt="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Josh Groban</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/users/5.jpeg"
              alt="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Raila Odinga</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/users/6.jpeg"
              alt="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Karamoko Deligata</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/users/7.jpeg"
              alt="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Kenya Kenyatta</span>
          </div>
        </div>

        <Ads />
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};
export default RightBar;
