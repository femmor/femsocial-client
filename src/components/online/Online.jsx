import { Users } from '../../dummyData';
import './Online.css';

const Online = () => {
  return (
    <>
      {Users.map(user => {
        const { id, profilePicture, username } = user;
        return (
          <li className="rightbarFriend" key={id}>
            <div className="rightbarProfileImgContainer">
              <img src={profilePicture} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{username}</span>
          </li>
        );
      })}
    </>
  );
};
export default Online;
