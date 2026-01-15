import { Link, Outlet } from 'react-router-dom';
import { FaShieldAlt, FaCreditCard, FaQuestionCircle, FaSearch } from 'react-icons/fa';
import DebtCheckForm from '../components/DebtCheckForm';

const DebtorsPage = () => {
  return (
    <div className="debtors-page">
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h1>Должникам</h1>
          </div>
          
          <div className="card-container">
            <div className="card" id="rights">
              <div className="card-icon">
                <FaShieldAlt />
              </div>
              <section>
                  <h3>Права должников</h3>
                  <p>
                    В соответствии с Федеральным законом № 230-ФЗ
                    <em>«О защите прав и законных интересов физических лиц при осуществлении деятельности по возврату просроченной задолженности»</em>,
                    должники имеют следующие права:
                  </p>

                  <ul>
                    <li><strong>Право на уважительное отношение</strong> — сотрудники агентства обязаны вести себя вежливо, без угроз и оскорблений.</li>
                    <li><strong>Право на защиту от психологического давления</strong> — запрещены запугивания, манипуляции и моральное давление.</li>
                    <li><strong>Право на получение полной информации о задолженности</strong> — сумма, основания, передающая организация, порядок погашения.</li>
                    <li><strong>Право на отказ от взаимодействия через представителя</strong> — можно указать доверенное лицо для общения с агентством.</li>
                    <li><strong>Право на полный отказ от взаимодействия</strong> — по истечении 4 месяцев с момента просрочки должник может отказаться от контактов.</li>
                  </ul>

                  <p>
                    Дополнительно законом установлены ограничения по частоте и времени контактов, запрет на разглашение информации третьим лицам, а также право должника обращаться с жалобами в ФССП, прокуратуру или суд.
                  </p>
                </section>
              <Link to="/documents/law">Подробнее о ФЗ-230</Link>
            </div>
            
            {<div className="card">
              <div className="card-icon">
                <FaCreditCard />
              </div>
              <h3>Способы погашения задолженности</h3>
              <p>Вы можете погасить задолженность следующими способами:</p>
              <ul>
                <li><strong>Банковский перевод</strong> - по реквизитам, указанным в уведомлении о задолженности</li>
                <li><strong>Онлайн-оплата</strong> - по QR-коду на нашем сайте через приложение вашего банка</li>
              </ul>
              <p>Все платежи проходят через защищенные каналы связи с использованием SSL-шифрования.</p>
            </div> }
            
            <div className="card" id="faq">
              <div className="card-icon">
                <FaQuestionCircle />
              </div>
              <h3>Часто задаваемые вопросы</h3>
              <div className="faq-list">
                <div className="faq-item" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px' }}>
                  <h4>Что делать, если я получил уведомление о задолженности?</h4>
                  <p>Внимательно ознакомьтесь с информацией в уведомлении. Если у вас есть вопросы или возражения, свяжитесь с нами по указанным контактным данным.</p>
                </div>
                <div className="faq-item" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px' }}>
                  <h4>Как узнать размер задолженности?</h4>
                  <p>Вы можете узнать размер задолженности, воспользовавшись формой проверки на нашем сайте, позвонив по телефону горячей линии или отправив запрос на электронную почту.</p>
                </div>
                <div className="faq-item" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px' }}>
                  <h4>Могу ли я оспорить задолженность?</h4>
                  <p>Да, вы имеете право оспорить задолженность. Для этого необходимо направить письменное заявление с приложением подтверждающих документов.</p>
                </div>
                <div className="faq-item" style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px' }}>
                  <h4>Можно ли получить рассрочку по выплате долга?</h4>
                  <p>Да, в индивидуальном порядке мы рассматриваем возможность предоставления рассрочки. Для этого необходимо связаться с нами и предоставить информацию о своем финансовом положении.</p>
                </div>
              </div>
              <Link to="/debtors/faq">Все вопросы и ответы</Link>
            </div>
            
            {/* <div className="card">
              <div className="card-icon">
                <FaSearch />
              </div>
              <h3>Проверка задолженности</h3>
              <DebtCheckForm />
            </div> */}
          </div>
          
          <div className="section-info" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h3>Способы связи</h3>
            <p>Если у вас возникли вопросы, вы можете связаться с нами:</p>
            <p>Телефон горячей линии: <a href="tel:88004441301">8 800 444 13 01</a> (Пн-Пт: 10:00-18:00)</p>
            <p>Email: <a href="mailto:info@pko-aword.ru">info@pko-aword.ru</a></p>
            <Link to="/contacts" className="btn-primary">Все контакты</Link>
          </div>
        </div>
      </section>
      
      <Outlet />
    </div>
  );
};

export default DebtorsPage;