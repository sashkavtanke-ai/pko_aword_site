import { Link, Outlet } from 'react-router-dom';
import { FaCertificate, FaShieldAlt, FaHandshake, FaFileAlt, FaBalanceScale } from 'react-icons/fa';

const DocumentsPage = () => {
  return (
    <div className="documents-page">
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h1>Документы</h1>
          </div>
          
          <div className="card-container">
            {/* <div className="card">
              <div className="card-icon">
                <FaCertificate />
              </div>
              <h3>Свидетельство ФССП</h3>
              <p>Свидетельство о включении в государственный реестр юридических лиц, осуществляющих деятельность по возврату просроченной задолженности в качестве основного вида деятельности.</p>
              <p>Номер в реестре: 12345</p>
              <p>Дата включения в реестр: 01.01.2020</p>
              <a href="/documents/certificate.pdf" download>Скачать свидетельство (PDF)</a>
            </div> */}
            
            <div className="card">
              <div className="card-icon">
                <FaShieldAlt />
              </div>
              <h3>Политика конфиденциальности</h3>
              <p>Политика обработки персональных данных ООО "ПКО "Аворд" разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
              <p>Документ определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных.</p>
              <a href="/documents/privacy-policy.pdf" download>Скачать политику конфиденциальности (PDF)</a>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <FaHandshake />
              </div>
              <h3>Кодекс этики</h3>
              <p>Кодекс профессиональной этики ООО "ПКО "Аворд" устанавливает стандарты поведения сотрудников при взаимодействии с должниками.</p>
              <p>Кодекс разработан в соответствии с рекомендациями НАПКА и требованиями ФЗ-230.</p>
              <a href="/documents/ethics-code.pdf" download>Скачать кодекс этики (PDF)</a>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <FaFileAlt />
              </div>
              <h3>Документы</h3>
              <p>Документы ООО "ПКО "Аворд":</p>
              <ul>
                <li><a href="/documents/egrul.pdf" download>Выписка из ЕГРЮЛ (PDF)</a></li>
                {/* <li><a href="/documents/ogrn.pdf" download>Свидетельство ИНН (PDF)</a></li> 
                */}
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <FaBalanceScale />
              </div>
              <h3>ФЗ-230</h3>
              <p>Федеральный закон от 03.07.2016 N 230-ФЗ "О защите прав и законных интересов физических лиц при осуществлении деятельности по возврату просроченной задолженности и о внесении изменений в Федеральный закон "О микрофинансовой деятельности и микрофинансовых организациях".</p>
              <p>Данный закон регулирует деятельность по возврату просроченной задолженности и устанавливает правила взаимодействия с должниками.</p>
              <a href="/documents/federal-law-230.pdf" download>Скачать ФЗ-230 (PDF)</a>
            </div>
          </div>
          
          {/* <div className="section-info" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h3>Информация о безопасности платежей</h3>
            <p>Все платежи на нашем сайте проходят через защищенное SSL-соединение, что обеспечивает безопасность передачи данных.</p>
            <p>Мы не храним данные банковских карт и используем только проверенные платежные системы.</p>
          </div> */}
        </div>
      </section>
      
      <Outlet />
    </div>
  );
};

export default DocumentsPage;