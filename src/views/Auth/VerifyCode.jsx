import React from 'react';
import './Auth.css';

function VerifyCode() {
  return (
    <div className="auth-modal-content">
      <h2>Введите код</h2>
      <p>Для подтверждения телефона отправили 5-значный код</p>
      <div className="code-inputs">
        <input type="text" maxLength="1" className="code-input" />
        <input type="text" maxLength="1" className="code-input" />
        <input type="text" maxLength="1" className="code-input" />
        <input type="text" maxLength="1" className="code-input" />
        <input type="text" maxLength="1" className="code-input" />
      </div>
      <button className="submit-btn">Подтвердить</button>
    </div>
  );
}

export default VerifyCode;
