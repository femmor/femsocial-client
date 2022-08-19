import { Post, Share } from '../../components';
import { Posts } from '../../dummyData';
import './Feed.css';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map(post => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};
export default Feed;
