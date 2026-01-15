import { useState } from 'react';
import { FaSearch, FaExclamationCircle } from 'react-icons/fa';

const DebtCheckForm = () => {
  // Состояния для полей формы
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    birthDate: '',
    documentType: 'passport',
    documentNumber: '',
    agreement: false
  });

  // Состояния для ошибок валидации
  const [errors, setErrors] = useState({});
  
  // Состояние для отображения результатов поиска
  const [searchResult, setSearchResult] = useState(null);
  
  // Состояние для отображения процесса поиска
  const [isSearching, setIsSearching] = useState(false);

  // Обработчик изменения полей формы
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Очищаем ошибку при изменении поля
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Валидация формы
  const validateForm = () => {
    const newErrors = {};
    
    // Проверка фамилии
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Пожалуйста, введите фамилию';
    }
    
    // Проверка имени
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Пожалуйста, введите имя';
    }
    
    // Проверка даты рождения
    if (!formData.birthDate) {
      newErrors.birthDate = 'Пожалуйста, введите дату рождения';
    }
    
    // Проверка номера документа в зависимости от типа
    if (!formData.documentNumber.trim()) {
      newErrors.documentNumber = 'Пожалуйста, введите номер документа';
    } else {
      // Проверка формата номера паспорта (для российского паспорта)
      if (formData.documentType === 'passport' && !/^\d{10}$/.test(formData.documentNumber.replace(/\s/g, ''))) {
        newErrors.documentNumber = 'Номер паспорта должен содержать 10 цифр (серия и номер)';
      }
    }
    
    // Проверка согласия на обработку персональных данных
    if (!formData.agreement) {
      newErrors.agreement = 'Необходимо согласие на обработку персональных данных';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Валидация формы перед отправкой
    if (!validateForm()) {
      return;
    }
    
    // Имитация поиска задолженности
    setIsSearching(true);
    setSearchResult(null);
    
    try {
      // Здесь будет код для отправки запроса на сервер
      // Например, с использованием fetch или axios
      
      // Имитация задержки ответа сервера
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Имитация результата поиска (в реальном приложении данные будут приходить с сервера)
      // Генерируем случайный результат для демонстрации
      const hasDebt = Math.random() > 0.5;
      
      if (hasDebt) {
        setSearchResult({
          found: true,
          debts: [
            {
              id: '1',
              creditor: 'ООО "Банк Кредитный"',
              amount: (Math.random() * 100000).toFixed(2),
              date: '2023-05-15',
              status: 'В работе'
            },
            {
              id: '2',
              creditor: 'МФО "Быстрозайм"',
              amount: (Math.random() * 50000).toFixed(2),
              date: '2023-07-22',
              status: 'Судебное производство'
            }
          ]
        });
      } else {
        setSearchResult({
          found: false
        });
      }
    } catch (error) {
      // Обработка ошибок при поиске
      console.error('Ошибка при поиске задолженности:', error);
      setErrors({
        ...errors,
        submit: 'Произошла ошибка при поиске задолженности. Пожалуйста, попробуйте позже.'
      });
    } finally {
      setIsSearching(false);
    }
  };

  // Форматирование суммы задолженности
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="debt-check-container">
      <h3>Проверка задолженности</h3>
      <p>Заполните форму ниже для проверки наличия задолженности. Все поля обязательны для заполнения.</p>
      
      {errors.submit && (
        <div className="alert alert-danger">
          <p>{errors.submit}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="debt-check-form">
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="lastName">Фамилия *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                disabled={isSearching}
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="firstName">Имя *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                disabled={isSearching}
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="middleName">Отчество</label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="form-control"
                disabled={isSearching}
              />
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="birthDate">Дата рождения *</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className={`form-control ${errors.birthDate ? 'is-invalid' : ''}`}
                disabled={isSearching}
              />
              {errors.birthDate && <div className="invalid-feedback">{errors.birthDate}</div>}
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="documentType">Тип документа *</label>
              <select
                id="documentType"
                name="documentType"
                value={formData.documentType}
                onChange={handleChange}
                className="form-control"
                disabled={isSearching}
              >
                <option value="passport">Паспорт РФ</option>
                <option value="foreign_passport">Загранпаспорт</option>
                <option value="driver_license">Водительское удостоверение</option>
              </select>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="documentNumber">Номер документа *</label>
              <input
                type="text"
                id="documentNumber"
                name="documentNumber"
                value={formData.documentNumber}
                onChange={handleChange}
                className={`form-control ${errors.documentNumber ? 'is-invalid' : ''}`}
                placeholder={formData.documentType === 'passport' ? '0000 000000' : ''}
                disabled={isSearching}
              />
              {errors.documentNumber && <div className="invalid-feedback">{errors.documentNumber}</div>}
            </div>
          </div>
        </div>
        
        <div className="form-group form-check">
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
            className={`form-check-input ${errors.agreement ? 'is-invalid' : ''}`}
            disabled={isSearching}
          />
          <label className="form-check-label" htmlFor="agreement">
            Я согласен на обработку персональных данных в соответствии с{' '}
            <a href="/documents/privacy-policy.pdf" target="_blank" rel="noopener noreferrer">
              политикой конфиденциальности
            </a>
          </label>
          {errors.agreement && <div className="invalid-feedback">{errors.agreement}</div>}
        </div>
        
        <button type="submit" className="btn btn-primary" disabled={isSearching}>
          {isSearching ? (
            <span>
              <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
              Поиск...
            </span>
          ) : (
            <span>
              <FaSearch className="mr-2" /> Проверить задолженность
            </span>
          )}
        </button>
      </form>
      
      {searchResult && (
        <div className="search-results mt-4">
          <h4>Результаты проверки</h4>
          
          {searchResult.found ? (
            <div>
              <div className="alert alert-warning">
                <FaExclamationCircle className="mr-2" />
                <strong>Обнаружена задолженность!</strong>
              </div>
              
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Кредитор</th>
                      <th>Сумма</th>
                      <th>Дата передачи</th>
                      <th>Статус</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResult.debts.map(debt => (
                      <tr key={debt.id}>
                        <td>{debt.creditor}</td>
                        <td>{formatCurrency(debt.amount)}</td>
                        <td>{new Date(debt.date).toLocaleDateString('ru-RU')}</td>
                        <td>{debt.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-3">
                <p>
                  Для получения подробной информации о задолженности и способах её погашения, 
                  пожалуйста, свяжитесь с нами по телефону горячей линии: 
                  <a href="tel:+78001234567">+7(800)444-13-01</a>
                </p>
              </div>
            </div>
          ) : (
            <div className="alert alert-success">
              <p>Задолженность не обнаружена.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DebtCheckForm;