import { Link, Outlet } from 'react-router-dom';
import { FaBuilding, FaCertificate, FaHistory, FaUsers, FaCreditCard } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h1>О компании</h1>
          </div>
          
          <div className="card-container">
            <div className="card" id="urid">
              <div className="card-icon">
                <FaBuilding />
              </div>
              <h3>Юридическая информация</h3>
              <p> ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ ПРОФЕССИОНАЛЬНОЕ КОЛЛЕКТОРСКАЯ ОРГАНИЗАЦИЯ "Аворд" </p>
              <p>ОГРН: 1257800028310</p>
              <p>ИНН: 7814850070</p>
              <p>КПП: 781401001</p>
              <p>Юридический адрес: 
                197342, город Санкт-Петербург, Торжковская ул, д. 5 литера А, помещ. 13-н ком. 93 
              </p>
              <p>Фактический адрес: 
                197342, город Санкт-Петербург, Торжковская ул, д. 5 литера А, помещ. 13-н ком. 93 
              </p>
            </div>
            
             {/*  <div className="card">
              <div className="card-icon">
                <FaCertificate />
              </div>
              <h3>Свидетельство ФССП</h3>
              <p>Свидетельство о включении в государственный реестр юридических лиц, осуществляющих деятельность по возврату просроченной задолженности в качестве основного вида деятельности</p>
              <p>Номер в реестре: 12345</p>
              <p>Дата включения в реестр: 01.01.2020</p>
              <Link to="/documents/certificate">Посмотреть свидетельство</Link>
            </div> // */}
            
            <div className="card" id="requisites">
              <div className="card-icon">
                <FaCreditCard />
              </div>
              <h3>Банковские реквизиты</h3>
              <p>Р/с: 4070281xxxxxxxxxxxxx</p>
              <p>Банк: ПАО "СберБанк"</p>
              <p>БИК: 044525225</p>
              <p>К/с: 30101810400000000225</p>
            </div>
          </div>
        </div>
      </section>
      
      <Outlet />
    </div>
  );
};

export default AboutPage;