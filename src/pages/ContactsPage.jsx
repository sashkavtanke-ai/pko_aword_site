import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const ContactsPage = () => {
  return (
    <div className="contacts-page" id="contacts">
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h1>Контакты</h1>
          </div>
          
          <div className="card-container">
            <div className="card">
              <div className="card-icon">
                <FaPhone />
              </div>
              <h3>Горячая линия</h3>
              <p><a href="tel:+78001234567">8 981 763 89 00</a></p>
              <div className="contact-info">
                <FaClock /> <span>Время работы:</span>
                <p>Понедельник - Пятница: 9:00 - 18:00</p>
                <p>Суббота, Воскресенье: выходной</p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Адреса</h3>
              <div className="contact-info">
                <p><strong>Юридический адрес:</strong></p>
                <p>
                  197342, город Санкт-Петербург, Торжковская ул, д. 5 литера А, помещ. 13-н ком. 93 
                </p>
                <p><strong>Фактический адрес:</strong></p>
                <p>
                  197342, город Санкт-Петербург, Торжковская ул, д. 5 литера А, помещ. 13-н ком. 93 
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <FaEnvelope />
              </div>
              <h3>Электронная почта</h3>
              <div className="contact-info">
                {/* <p><strong>Общие вопросы:</strong></p>
                <p><a href="mailto:info@collector.ru">info@pko-forward.ru</a></p>
                <p><strong>Для должников:</strong></p>
                <p><a href="mailto:debtors@collector.ru">debtors@pko-forward.ru</a></p>
                <p><strong>Для партнеров:</strong></p>
                <p><a href="mailto:partners@collector.ru">partners@pko-forward.ru</a></p> */}
                <p><strong>Директор:</strong></p>
                <p><a href="mailto:george_pc@bk.ru">george_pc@bk.ru</a></p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-section" style={{ marginTop: '3rem' }}>
            <div className="section-title">
              <h2>Форма обратной связи</h2>
            </div>
            <div className="contact-form-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <ContactForm />
            </div>
          </div>
          
          <div className="map-section" style={{ marginTop: '3rem' }}>
            <div className="section-title">
              <h2>Карта проезда</h2>
            </div>
            <div className="map-container" style={{ height: '500px', backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab16324abd9a9c084fbd54cecda8d92d926f058031f01e2d061f1a89edf056c4f&amp;source=constructor" width="800" height="500" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;