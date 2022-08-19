import { Feed, RightBar, Sidebar } from '../../components';
import './Home.css';

const Home = () => {
  return (
    <div className="homeContainer">
      <Sidebar />
      <Feed />
      <RightBar />
    </div>
  );
};
export default Home;
