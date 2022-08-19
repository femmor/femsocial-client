import { FaSearch } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { BiChat } from 'react-icons/bi';
import { MdNotificationsActive } from 'react-icons/md';
import './TopBar.css';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Femsocial</span>
      </div>

      <div className="topbarCenter">
        <div className="searchBar">
          <FaSearch className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search for friends, post and video"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link className="topbarLink" to="/">
            Home
          </Link>
          <Link className="topbarLink" to="/profile">
            Timeline
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BsPersonFill />
            <span className="topbarIconBadge">
              <span className="topbarIconBadgeText">0</span>
            </span>
          </div>
          <div className="topbarIconItem">
            <BiChat />
            <span className="topbarIconBadge">
              <span className="topbarIconBadgeText">1</span>
            </span>
          </div>
          <div className="topbarIconItem">
            <MdNotificationsActive />
            <span className="topbarIconBadge">
              <span className="topbarIconBadgeText">2</span>
            </span>
          </div>
        </div>

        <Link to="/profile">
          <img
            className="topbarImg"
            src="./assets/users/1.jpeg"
            alt="profile"
          />
        </Link>
      </div>
    </div>
  );
};
export default TopBar;
