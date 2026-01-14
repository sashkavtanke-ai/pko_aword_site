import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-title">О компании</h3>
            <ul className="footer-links">
              <li className="footer-link"><Link to="/about/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Юридическая информация</Link></li>
              {/* <li className="footer-link"><Link to="/documents/certificate">Свидетельство ФССП</Link></li> */}
              {/* <li className="footer-link"><Link to="/about/history">История и миссия</Link></li> */}
              {/* <li className="footer-link"><Link to="/about/membership">Членство в НАПКА</Link></li> */}
              <li className="footer-link"><Link to="/about/requisites" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Банковские реквизиты</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Услуги</h3>
            <ul className="footer-links">
              <li className="footer-link"><Link to="/services/debt-collection" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Взыскание задолженности</Link></li>
              {/* <li className="footer-link"><Link to="/services/legal">Судебное производство</Link></li> */}
              {/* <li className="footer-link"><Link to="/services/utilities">Работа с долгами ЖКХ</Link></li> */}
              <li className="footer-link"><Link to="/services/advantages" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Преимущества</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Должникам</h3>
            <ul className="footer-links">
              <li className="footer-link"><Link to="/debtors/rights" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Права должников</Link></li>
              <li className="footer-link"><Link to="/debtors/payment" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Способы погашения</Link></li>
              <li className="footer-link"><Link to="/debtors/faq" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>FAQ</Link></li>
              <li className="footer-link"><Link to="/debtors/check" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Проверка задолженности</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Контакты</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <FaPhone /> <a href="tel:88004441301">8 800 444 13 01</a>
                <div className="small">Пн-Пт: 9:00-18:00</div>
              </li>
              <li className="footer-link">
                <FaEnvelope /> <a href="mailto:info@pko-aword.ru">info@pko-aword.ru</a>
              </li>
              <li className="footer-link">
                <FaMapMarkerAlt /> 197342, город Санкт-Петербург, Торжковская ул, д. 5 литера А, помещ. 13-н ком. 93 
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ООО "ПКО "Аворд". Все права защищены.</p>
          <p>Лицензия/разрешение №В006-00127-78/02407422.
          Внесение сведений о юридическом лице в государственный реестр профессиональных коллекторских организаций. Реестровая запись №860 от 03 июня 2025 года</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;