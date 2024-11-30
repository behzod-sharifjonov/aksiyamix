import React, { useState, useEffect } from "react";
import "./Auth.css";
import { IoCloseSharp, IoArrowBackOutline } from "react-icons/io5";

function AuthModal({ showModal, closeModal }) {
	const [inputValue, setInputValue] = useState("");
	const [isCodeSent, setIsCodeSent] = useState(false);
	const [isVerified, setIsVerified] = useState(false);
	const [generatedCode, setGeneratedCode] = useState(null);
	const [codeInputs, setCodeInputs] = useState(["", "", "", "", ""]);
	const [userName, setUserName] = useState("");
	const [timer, setTimer] = useState(60);
	const [canResend, setCanResend] = useState(false);

	useEffect(() => {
		if (timer > 0 && isCodeSent) {
			const countdown = setTimeout(() => {
				setTimer(timer - 1);
			}, 1000);
			return () => clearTimeout(countdown);
		} else if (timer === 0) {
			setCanResend(true);
		}
	}, [timer, isCodeSent]);

	const handleInputChange = (e) => {
		const value = e.target.value.trim();
		setInputValue(value);
	};

	const handleSendCode = () => {
		const code = Math.floor(10000 + Math.random() * 90000).toString();
		setGeneratedCode(code);
		setIsCodeSent(true);
		setTimer(60);
		setCanResend(false);
		alert(`Ваш код: ${code}`);
	};

	const handleCodeInputChange = (e, index) => {
		const value = e.target.value;
		if (/^\d?$/.test(value)) {
			const newInputs = [...codeInputs];
			newInputs[index] = value;
			setCodeInputs(newInputs);

			if (value && index < 4) {
				const nextInput = document.getElementById(`code-input-${index + 1}`);
				if (nextInput) nextInput.focus();
			}
		}
	};

	const handleVerifyCode = () => {
		const enteredCode = codeInputs.join("");
		if (enteredCode === generatedCode) {
			setIsVerified(true);
		} else {
			alert("Неверный код. Попробуйте снова.");
		}
	};

	const handleNameChange = (e) => {
		setUserName(e.target.value);
	};

	const handleRegister = () => {
		if (userName.trim() === "") {
			alert("Введите имя.");
			return;
		}
		alert(`Регистрация завершена! Добро пожаловать, ${userName}.`);
		closeModal();
		resetForm();
	};

	const handleGoBack = () => {
		setIsCodeSent(false);
		setCodeInputs(["", "", "", "", ""]);
	};

	const resetForm = () => {
		setInputValue("");
		setIsCodeSent(false);
		setIsVerified(false);
		setGeneratedCode(null);
		setCodeInputs(["", "", "", "", ""]);
		setUserName("");
		setTimer(60);
		setCanResend(false);
	};

	if (!showModal) return null;

	return (
		<div className="auth-modal">
			<div className="auth-modal-content">
				<button onClick={() => { closeModal(); resetForm(); }} className="close-btn">
					<IoCloseSharp />
				</button>

				{isVerified ? (
					<>
						<h2>Введите ваше имя</h2>
						<p>Для завершения регистрации введите свое имя:</p>
						<input
							type="text"
							placeholder="Например, Иван Иванов"
							value={userName}
							onChange={handleNameChange}
							className="phone-input"
						/>
						<button onClick={handleRegister} className="submit-btn">
							Завершить регистрацию
						</button>
					</>
				) : isCodeSent ? (
					<>
						<button onClick={handleGoBack} className="back-btn-login">
							<IoArrowBackOutline />
						</button>
						<h2>Введите код</h2>
						<p>
							Для подтверждения телефона отправили 5-значный код на{" "}
							<span className="phone-number">+998 33 695-95-50</span>
						</p>
						<div className="code-inputs">
							{codeInputs.map((value, index) => (
								<input
									key={index}
									id={`code-input-${index}`}
									type="text"
									maxLength="1"
									value={value}
									onChange={(e) => handleCodeInputChange(e, index)}
									className="code-input"
								/>
							))}
						</div>
						<p className="timer">
							Если код не придёт, можно получить новый через {timer} сек
						</p>
						<button onClick={handleVerifyCode} className="submit-btn">
							Подтвердить
						</button>
						{canResend && (
							<button onClick={handleSendCode} className="resend-btn">
								Отправить код повторно
							</button>
						)}
					</>
				) : (
					<>
						<h2>Введите контактные данные</h2>
						<p style={{ marginBottom: "20px", marginTop: "10px" }}>
							Мы отправим код подтверждения на указанный номер или email
						</p>
						<p className="inp-topWords">Телефон или Email</p>
						<input
							type="text"
							placeholder="Например, +998 (90) 123-45-67 или example@mail.com"
							value={inputValue}
							onChange={handleInputChange}
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
