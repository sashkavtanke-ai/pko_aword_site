import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreement: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // обработчик изменения полей
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // валидация
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Пожалуйста, введите ваш email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Пожалуйста, введите корректный email';
    }

    if (formData.phone && !/^\+?[0-9\s-()]{10,20}$/.test(formData.phone)) {
      newErrors.phone = 'Пожалуйста, введите корректный номер телефона';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Пожалуйста, введите ваше сообщение';
    }

    if (!formData.agreement) {
      newErrors.agreement = 'Необходимо согласие на обработку персональных данных';
    }

    setErrors(newErrors);
    return newErrors;
  };

  // отправка формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      const firstErrorField = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://n8n.rightformoney.ru/webhook/send-contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Ошибка сервера');
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        agreement: false
      });

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setErrors({
        ...errors,
        submit: 'Произошла ошибка при отправке формы. Попробуйте позже.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <p>Заполните форму ниже, и наши специалисты свяжутся с вами в ближайшее время.</p>

      {isSubmitted && (
        <div className="alert alert-success" role="alert">
          <p>Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.</p>
        </div>
      )}

      {errors.submit && (
        <div className="alert alert-danger" role="alert">
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
            aria-required="true"
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
            aria-required="true"
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
            aria-required="true"
            value={formData.message}
            onChange={handleChange}
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            rows="5"
            disabled={isSubmitting}
          />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            aria-required="true"
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

        <div className="text-center" style={{ marginTop: '1.5rem' }}>
          <button
            type="submit"
            className="btn btn-primary"
            aria-label="Отправить форму"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>
                <span
                  className="spinner-border spinner-border-sm mr-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Отправка...
              </span>
            ) : (
              <span>
                <FaPaperPlane className="mr-2" /> Отправить сообщение
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
