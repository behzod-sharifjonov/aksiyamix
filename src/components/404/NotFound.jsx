import React from 'react';
import './NotFound.css';
import NotFoundImage from "../../assets/NotFound.svg";
import Stars from "../../assets/starsNotFound.svg";
import ErrorCloud from "../../assets/ErrorCloud.svg";

const NotFound = () => {
	return (
		<div className="not-found-container">
			<img src={Stars} alt="Stars Background" className="stars-background" />
			<div className="error-box">
				<div className="error-code-container">
					<img src={NotFoundImage} alt="404" className="not-found-image" />
					<img src={ErrorCloud} alt="Error Cloud" className="error-cloud" />
				</div>
				<p className="error-message">Страница не найдена</p>
				<p className="error-description">
					К сожалению, такой страницы нет. Возможно, вы перешли <br />
					по старой ссылке или ввели неправильный адрес.
				</p>
				<button className="home-button" onClick={() => window.location.href = '/'}>
					Главная страница
				</button>
			</div>
		</div>
	);
};

export default NotFound;
