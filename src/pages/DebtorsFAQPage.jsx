import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaQuestionCircle } from 'react-icons/fa';

const DebtorsFAQPage = () => {
  return (
    <div className="debtors-faq-page">
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h1>Часто задаваемые вопросы должников</h1>
            <p>Ответы на наиболее распространенные вопросы о взыскании задолженности</p>
          </div>
          
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question">
                <FaQuestionCircle className="faq-icon" />
                <h3>Правомерна ли передача моего долга коллекторскому агентству без моего согласия?</h3>
              </div>
              <div className="faq-answer">
                <p>Да, согласно законодательству, кредитор имеет право передать долг третьей стороне без согласия должника, если это не запрещено условиями кредитного договора.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <FaQuestionCircle className="faq-icon" />
                <h3>Какие права имеют коллекторы при взаимодействии с должником?</h3>
              </div>
              <div className="faq-answer">
                <p>Коллекторы могут связываться с должником посредством телефонных звонков, сообщений, почтовых отправлений и личных встреч в установленные законом временные промежутки. Например, звонки разрешены в будние дни с 8:00 до 22:00 и в выходные с 9:00 до 20:00.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <FaQuestionCircle className="faq-icon" />
                <h3>Что запрещено делать коллекторам при взыскании задолженности?</h3>
              </div>
              <div className="faq-answer">
                <p>Коллекторам запрещено применять физическую силу, угрожать, оскорблять, использовать ненормативную лексику, а также разглашать информацию о задолженности третьим лицам без согласия должника.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <FaQuestionCircle className="faq-icon" />
                <h3>Могут ли коллекторы подать на меня в суд?</h3>
              </div>
              <div className="faq-answer">
                <p>Да, коллекторы имеют право обратиться в суд для взыскания задолженности, если досудебные методы не принесли результата. В случае положительного решения суда, взыскание может быть передано судебным приставам.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <FaQuestionCircle className="faq-icon" />
                <h3>Что делать, если я не согласен с суммой задолженности?</h3>
              </div>
              <div className="faq-answer">
                <p>Рекомендуется связаться с коллекторским агентством для уточнения деталей задолженности. При необходимости можно запросить документы, подтверждающие сумму долга, и обратиться за юридической консультацией.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <FaQuestionCircle className="faq-icon" />
                <h3>Как часто коллекторы могут со мной связываться?</h3>
              </div>
              <div className="faq-answer">
                <p>Закон устанавливает ограничения на частоту взаимодействия: личные встречи — не более одного раза в неделю, телефонные звонки — не более одного раза в сутки, двух раз в неделю и восьми раз в месяц.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <FaQuestionCircle className="faq-icon" />
                <h3>Могут ли коллекторы связаться с моими родственниками или работодателем?</h3>
              </div>
              <div className="faq-answer">
                <p>Без вашего письменного согласия коллекторы не имеют права взаимодействовать с третьими лицами по поводу вашей задолженности, за исключением случаев, предусмотренных законом.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <FaQuestionCircle className="faq-icon" />
                <h3>Что делать, если коллекторы нарушают мои права?</h3>
              </div>
              <div className="faq-answer">
                <p>В случае неправомерных действий со стороны коллекторов рекомендуется обратиться с жалобой в Федеральную службу судебных приставов (ФССП) или в правоохранительные органы.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <FaQuestionCircle className="faq-icon" />
                <h3>Можно ли договориться о реструктуризации долга с коллекторским агентством?</h3>
              </div>
              <div className="faq-answer">
                <p>Да, многие коллекторские агентства готовы рассмотреть варианты реструктуризации задолженности или заключения соглашения о поэтапном погашении долга. Рекомендуется обсудить эти возможности напрямую с агентством.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <FaQuestionCircle className="faq-icon" />
                <h3>Что произойдет, если я проигнорирую требования коллекторов?</h3>
              </div>
              <div className="faq-answer">
                <p>Игнорирование требований может привести к подаче иска в суд и последующему принудительному взысканию задолженности через судебных приставов, что может повлечь дополнительные расходы и ограничения.</p>
              </div>
            </div>
          </div>
          
          <div className="back-link">
            <Link to="/debtors" className="btn-secondary">
              <FaArrowLeft /> Вернуться к разделу должникам
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DebtorsFAQPage;