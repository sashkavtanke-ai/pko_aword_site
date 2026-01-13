import { Link, Outlet } from 'react-router-dom';
import { FaBalanceScale, FaGavel, FaHome, FaCheckCircle } from 'react-icons/fa';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h1>Услуги</h1>
          </div>
          
          <div className="card-container">
            <div className="card" id="debt-collection">
              <div className="card-icon">
                <FaBalanceScale />
              </div>
              <h3>Взыскание задолженности</h3>
              <p>Мы предоставляем полный комплекс услуг по взысканию задолженности:</p>
              <ul>
                <li>Взыскание задолженности по кредитам банков</li>
                <li>Взыскание задолженности по займам МФО</li>
                <li>Взыскание задолженности по договорам лизинга</li>
                <li>Взыскание задолженности по договорам страхования</li>
              </ul>
              <p>Все наши действия строго соответствуют требованиям ФЗ-230 и других нормативных актов.</p>
            </div>
            
            <div className="card" id="court-collection">
              <div className="card-icon">
                <FaGavel />
              </div>
              <h3>Судебное производство</h3>
              <p>Мы оказываем юридическую поддержку на всех этапах судебного взыскания:</p>
              <ul>
                <li>Подготовка и подача исковых заявлений</li>
                <li>Представительство в суде</li>
                <li>Получение судебных приказов и исполнительных листов</li>
                <li>Сопровождение исполнительного производства</li>
                <li>Взаимодействие с ФССП</li>
              </ul>
            </div>
            
            <div className="card" id="advantages">
              <div className="card-icon">
                <FaCheckCircle />
              </div>
              <h3>Преимущества работы с нами</h3>
              <ul>
                <li><strong>Законность</strong> - все наши действия строго соответствуют требованиям законодательства РФ</li>
                <li><strong>Профессионализм</strong> - наши специалисты имеют многолетний опыт работы в сфере взыскания</li>
                <li><strong>Эффективность</strong> - мы используем современные методы и технологии для достижения результата</li>
                <li><strong>Прозрачность</strong> - регулярная отчетность о ходе взыскания</li>
                <li><strong>Индивидуальный подход</strong> - разработка оптимальной стратегии взыскания для каждого случая</li>
                <li><strong>Этичность</strong> - соблюдение профессиональной этики и уважительное отношение к должникам</li>
              </ul>
            </div>
          </div>
          
          <div className="section-info" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h3>Законные методы работы</h3>
            <p>Наша компания строго соблюдает требования Федерального закона №230-ФЗ «О защите прав и законных интересов физических лиц при осуществлении деятельности по возврату просроченной задолженности».</p>
            <p>Мы не используем методы психологического давления, не вводим должников в заблуждение и не нарушаем их права.</p>
            <Link to="/documents/law" className="btn-primary">Ознакомиться с ФЗ-230</Link>
          </div>
        </div>
      </section>
      
      <Outlet />
    </div>
  );
};

export default ServicesPage;