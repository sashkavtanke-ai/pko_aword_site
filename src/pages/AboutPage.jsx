import { Link, Outlet } from "react-router-dom";
import {
  FaBuilding,
  FaCertificate,
  FaHistory,
  FaUsers,
  FaCreditCard,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h1>РЕКВИЗИТЫ</h1>
          </div>

          <div className="card-container">
            {/* Юридическая информация */}
            <div className="card" id="urid">
              <div className="card-icon">
                <FaBuilding />
              </div>

              <h3>Юридическая информация</h3>

              <p>
                ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ ПРОФЕССИОНАЛЬНОЕ
                КОЛЛЕКТОРСКАЯ ОРГАНИЗАЦИЯ «Аворд»
              </p>
              <p>ОГРН: 1257800028310</p>
              <p>ИНН: 7814850070</p>
              <p>КПП: 781401001</p>

              <p>
                Юридический адрес: <br />
                197342, г. Санкт-Петербург, Торжковская ул., д. 5 литера А,
                помещ. 13-н, ком. 93
              </p>

              <p>
                Фактический адрес: <br />
                197342, г. Санкт-Петербург, Торжковская ул., д. 5 литера А,
                офис 417
              </p>
            </div>

            {/* QR-код */}
            <div className="card" id="qr">
              <div className="card-icon">
                <FaCertificate />
              </div>

              <h3>QR-код для быстрой оплаты</h3>

              <div className="qr-image">
                <img
                  src="/images/QR_AWORD_.jpg"
                  alt="QR-код для быстрой оплаты"
                  className="qr-img"
                />
              </div>
            </div>

            {/* Банковские реквизиты */}
            <div className="card" id="requisites">
              <div className="card-icon">
                <FaCreditCard />
              </div>

              <h3>Банковские реквизиты</h3>

              <p>Получатель платежа: ООО ПКО «Аворд»</p>
              <p>ИНН получателя: 7814850070</p>
              <p>Р/с: 40702810655710004219</p>
              <p>Банк: СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК</p>
              <p>БИК: 044030653</p>
              <p>К/с: 30101810500000000653</p>
            </div>
          </div>
        </div>
      </section>

      {/* Для вложенных роутов */}
      <Outlet />
    </div>
  );
};

export default AboutPage;
