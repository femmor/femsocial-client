import { Users } from '../../dummyData';
import './CloseFriends.css';

const CloseFriends = () => {
  return (
    <>
      {Users.map(user => {
        const { id, username, profilePicture } = user;

        return (
          <li className="sidebarFriendListItem" key={id}>
            <img
              src={profilePicture}
              className="sidebarFriendImg"
              alt="friend"
            />
            <div className="sidebarFriendName">{username}</div>
          </li>
        );
      })}
    </>
  );
};
export default CloseFriends;
