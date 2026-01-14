import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaShieldAlt } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container header-container">
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`}>Главная</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>РЕКВИЗИТЫ</Link>
          <Link to="/services" className={`nav-link ${isActive('/services')}`}>Услуги</Link>
          <Link to="/debtors" className={`nav-link ${isActive('/debtors')}`}>Должникам</Link>
          <Link to="/documents" className={`nav-link ${isActive('/documents')}`}>Документы</Link>
          <Link to="/contacts" className={`nav-link ${isActive('/contacts')}`}>Контакты</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;