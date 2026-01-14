import { Link } from 'react-router-dom';
import { FaBalanceScale, FaHandshake, FaShieldAlt, FaFileAlt } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Секция Hero */}
      <section className="hero">
        <div className="container">
          <h1>Профессиональное взыскание задолженности</h1>
          <p>
            Мы предоставляем услуги по взысканию задолженности в полном соответствии 
            с законодательством РФ. Наша компания включена в государственный реестр 
            юридических лиц, осуществляющих деятельность по возврату просроченной задолженности.
          </p>
          <Link to="/contacts" className="btn-primary">Связаться с нами</Link>
        </div>
      </section>

      {/* Секция Услуги */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Основные направления деятельности</h2>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="card-icon">
                <FaBalanceScale />
              </div>
              <h3>Взыскание задолженности</h3>
              <p>Профессиональное взыскание задолженности по кредитам, займам и другим обязательствам в соответствии с ФЗ-230.</p>
              <Link to="/services/debt-collection">Подробнее</Link>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <FaFileAlt />
              </div>
              <h3>Судебное производство</h3>
              <p>Полное юридическое сопровождение процесса взыскания задолженности через судебные инстанции.</p>
              <Link to="/services/legal">Подробнее</Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Секция Преимущества */}
      <section className="section" style={{ backgroundColor: '#f5f7fa' }}>
        <div className="container">
          <div className="section-title">
            <h2>Наши преимущества</h2>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="card-icon">
                <FaShieldAlt />
              </div>
              <h3>Законность</h3>
              <p>Все наши действия строго соответствуют требованиям ФЗ-230 «О защите прав и законных интересов физических лиц при осуществлении деятельности по возврату просроченной задолженности».</p>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <FaHandshake />
              </div>
              <h3>Профессионализм</h3>
              <p>Наши специалисты имеют многолетний опыт работы в сфере взыскания задолженности и постоянно повышают свою квалификацию.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <FaBalanceScale />
              </div>
              <h3>Прозрачность</h3>
              <p>Мы предоставляем полную информацию о ходе взыскания и всегда готовы ответить на вопросы наших клиентов.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Секция Контакты */}
      <section className="section">
        <div className="container">
          <div className="section-title">
          </div>
          <div className="contact-form-section" style={{ marginTop: '3rem' }}>
            <div className="section-title">
              <h2>Форма обратной связи</h2>
            </div>
            <div className="contact-form-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <ContactForm />
            </div>
          </div>
          </div>
      </section>
    </div>
  );
};

export default HomePage;