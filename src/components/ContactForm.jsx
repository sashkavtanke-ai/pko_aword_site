import { useState } from 'react';
import { FaPaperPlane, FaExclamationCircle } from 'react-icons/fa';

const ContactForm = () => {
  // Состояния для полей формы
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreement: false
  });

  // Состояния для ошибок валидации
  const [errors, setErrors] = useState({});
  
  // Состояние для отображения сообщения об успешной отправке
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Состояние для отображения процесса отправки
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    // Проверка имени
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }
    
    // Проверка email
    if (!formData.email.trim()) {
      newErrors.email = 'Пожалуйста, введите ваш email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Пожалуйста, введите корректный email';
    }
    
    // Проверка телефона (опционально)
    if (formData.phone && !/^\+?[0-9\s-()]{10,20}$/.test(formData.phone)) {
      newErrors.phone = 'Пожалуйста, введите корректный номер телефона';
    }
    
    // Проверка сообщения
    if (!formData.message.trim()) {
      newErrors.message = 'Пожалуйста, введите ваше сообщение';
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
    
    // Имитация отправки данных на сервер
    setIsSubmitting(true);
    
    try {
      // Здесь будет код для отправки данных на сервер
      // Например, с использованием fetch или axios
      
      // Имитация задержки ответа сервера
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Очистка формы после успешной отправки
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        agreement: false
      });
      
      // Показываем сообщение об успешной отправке
      setIsSubmitted(true);
      
      // Скрываем сообщение через 5 секунд
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      // Обработка ошибок при отправке
      console.error('Ошибка при отправке формы:', error);
      setErrors({
        ...errors,
        submit: 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h3>Форма обратной связи</h3>
      <p>Заполните форму ниже, и наши специалисты свяжутся с вами в ближайшее время.</p>
      
      {isSubmitted && (
        <div className="alert alert-success">
          <p>Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.</p>
        </div>
      )}
      
      {errors.submit && (
        <div className="alert alert-danger">
          <p>{errors.submit}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Ваше имя *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            disabled={isSubmitting}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            disabled={isSubmitting}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Телефон</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            placeholder="+7 (___) ___-__-__"
            disabled={isSubmitting}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Сообщение *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            rows="5"
            disabled={isSubmitting}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>
        
        <div className="form-group form-check">
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
            className={`form-check-input ${errors.agreement ? 'is-invalid' : ''}`}
            disabled={isSubmitting}
          />
          <label className="form-check-label" htmlFor="agreement">
            Я согласен на обработку персональных данных в соответствии с{' '}
            <a href="/documents/privacy-policy.pdf" target="_blank" rel="noopener noreferrer">
              политикой конфиденциальности
            </a>
          </label>
          {errors.agreement && <div className="invalid-feedback">{errors.agreement}</div>}
        </div>
        
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>
              <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
              Отправка...
            </span>
          ) : (
            <span>
              <FaPaperPlane className="mr-2" /> Отправить сообщение
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;