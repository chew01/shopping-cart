import splash from './assets/icecream.jpg';
import './components/styles/Home.css';

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${splash})` }}>
      <p className="splash-overlay">
        The sweetest things are the simplest things.
      </p>
    </div>
  );
};

export default Home;
