import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';
import VerifyCode from './VerifyCode';

function AuthModal({ showModal, closeModal }) {
	const [phoneNumber, setPhoneNumber] = useState('+998');
	const [isCodeSent, setIsCodeSent] = useState(false);

	const handlePhoneChange = (e) => {
		setPhoneNumber(e.target.value);
	};

	const handleSendCode = async () => {
		try {
			const response = await axios.post('', {
				phone: phoneNumber,
			});

			if (response.status === 200) {
				setIsCodeSent(true);
				alert('Код отправлен на ваш номер.');
			} else {
				alert('Ошибка отправки кода. Проверьте номер телефона.');
			}
		} catch (error) {
			console.error('Ошибка при отправке кода:', error);
			alert('Ошибка при отправке кода. Попробуйте снова.');
		}
	};

	if (!showModal) return null;

	return (
		<div className="auth-modal">
			<div className="auth-modal-content">
				<button onClick={closeModal} className="close-btn">X</button>

				{isCodeSent ? (
					<VerifyCode />
				) : (
					<>
						<h2>Введите номер телефона</h2>
						<p>Отправим смс с кодом подтверждения</p>
						<input
							type="text"
							placeholder="+998"
							value={phoneNumber}
							onChange={handlePhoneChange}
							className="phone-input"
						/>
						<button onClick={handleSendCode} className="submit-btn">
							Получить код
						</button>
					</>
				)}
			</div>
		</div>
	);
}

export default AuthModal;
