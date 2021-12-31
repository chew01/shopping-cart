import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="title">105° Ice Cream Shop</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
      </nav>
    </div>
  );
};

export default Header;
