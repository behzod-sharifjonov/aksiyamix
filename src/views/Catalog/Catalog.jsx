import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import "./Catalog.css";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Catalog = () => {
	const [activeCategory, setActiveCategory] = useState(null);

	const catalogData = [
		{
			title: "Электроника",
			subcategories: [
				{
					title: "Спорт товары",
					items: ["Все товары", "Велотренажеры", "Беговые дорожки", "Комплексные тренажёры", "Ещё"],
				},
				{
					title: "Бассейны",
					items: ["Все товары", "Каркасные бассейны", "Надувные бассейны", "Детские бассейны", "Ещё"],
				},
				{
					title: "Настольные игры",
					items: ["Все товары"],
				},
				{
					title: "Спорт товары",
					items: ["Все товары", "Велотренажеры", "Беговые дорожки", "Комплексные тренажёры", "Ещё"],
				},
				{
					title: "Бассейны",
					items: ["Все товары", "Каркасные бассейны", "Надувные бассейны", "Детские бассейны", "Ещё"],
				},
				{
					title: "Настольные игры",
					items: ["Все товары"],
				},
				{
					title: "Спорт товары",
					items: ["Все товары", "Велотренажеры", "Беговые дорожки", "Комплексные тренажёры", "Ещё"],
				},
				{
					title: "Бассейны",
					items: ["Все товары", "Каркасные бассейны", "Надувные бассейны", "Детские бассейны", "Ещё"],
				},
				{
					title: "Настольные игры",
					items: ["Все товары"],
				},
			],
		},
		{
			title: "Электроника",
			subcategories: [
				{
					title: "Спорт товары",
					items: ["Все товары", "Велотренажеры", "Беговые дорожки", "Комплексные тренажёры", "Ещё"],
				},
				{
					title: "Бассейны",
					items: ["Все товары", "Каркасные бассейны", "Надувные бассейны", "Детские бассейны", "Ещё"],
				},
				{
					title: "Настольные игры",
					items: ["Все товары"],
				},
			],
		},
		{
			title: "Электроника",
			subcategories: [
				{
					title: "Спорт товары",
					items: ["Все товары", "Велотренажеры", "Беговые дорожки", "Комплексные тренажёры", "Ещё"],
				},
				{
					title: "Бассейны",
					items: ["Все товары", "Каркасные бассейны", "Надувные бассейны", "Детские бассейны", "Ещё"],
				},
				{
					title: "Настольные игры",
					items: ["Все товары"],
				},
			],
		},
		{
			title: "Электроника",
			subcategories: [
				{
					title: "Спорт товары",
					items: ["Все товары", "Велотренажеры", "Беговые дорожки", "Комплексные тренажёры", "Ещё"],
				},
				{
					title: "Бассейны",
					items: ["Все товары", "Каркасные бассейны", "Надувные бассейны", "Детские бассейны", "Ещё"],
				},
				{
					title: "Настольные игры",
					items: ["Все товары"],
				},
			],
		},
		{
			title: "Электроника",
			subcategories: [
				{
					title: "Спорт товары",
					items: ["Все товары", "Велотренажеры", "Беговые дорожки", "Комплексные тренажёры", "Ещё"],
				},
				{
					title: "Бассейны",
					items: ["Все товары", "Каркасные бассейны", "Надувные бассейны", "Детские бассейны", "Ещё"],
				},
				{
					title: "Настольные игры",
					items: ["Все товары"],
				},
			],
		},
		{
			title: "Электроника",
			subcategories: [
				{
					title: "Спорт товары",
					items: ["Все товары", "Велотренажеры", "Беговые дорожки", "Комплексные тренажёры", "Ещё"],
				},
				{
					title: "Бассейны",
					items: ["Все товары", "Каркасные бассейны", "Надувные бассейны", "Детские бассейны", "Ещё"],
				},
				{
					title: "Настольные игры",
					items: ["Все товары"],
				},
			],
		},
		{
			title: "Электроника",
			subcategories: [
				{
					title: "Спорт товары",
					items: ["Все товары", "Велотренажеры", "Беговые дорожки", "Комплексные тренажёры", "Ещё"],
				},
				{
					title: "Бассейны",
					items: ["Все товары", "Каркасные бассейны", "Надувные бассейны", "Детские бассейны", "Ещё"],
				},
				{
					title: "Настольные игры",
					items: ["Все товары"],
				},
			],
		},
		{
			title: "Электроника",
			subcategories: [
				{
					title: "Спорт товары",
					items: ["Все товары", "Велотренажеры", "Беговые дорожки", "Комплексные тренажёры", "Ещё"],
				},
				{
					title: "Бассейны",
					items: ["Все товары", "Каркасные бассейны", "Надувные бассейны", "Детские бассейны", "Ещё"],
				},
				{
					title: "Настольные игры",
					items: ["Все товары"],
				},
			],
		},
		{
			title: "Электроника",
			subcategories: [
				{
					title: "Спорт товары",
					items: ["Все товары", "Велотренажеры", "Беговые дорожки", "Комплексные тренажёры", "Ещё"],
				},
				{
					title: "Бассейны",
					items: ["Все товары", "Каркасные бассейны", "Надувные бассейны", "Детские бассейны", "Ещё"],
				},
				{
					title: "Настольные игры",
					items: ["Все товары"],
				},
			],
		},
		{
			title: "Мужская одежда",
			subcategories: [
				{
					title: "Костюмы",
					items: ["Деловые", "Спортивные", "Ещё"],
				},
				{
					title: "Рубашки",
					items: ["Классические", "Повседневные"],
				},
			],
		},
		{
			title: "Мужская одежда",
			subcategories: [
				{
					title: "Костюмы",
					items: ["Деловые", "Спортивные", "Ещё"],
				},
				{
					title: "Рубашки",
					items: ["Классические", "Повседневные"],
				},
			],
		},
		{
			title: "Мужская одежда",
			subcategories: [
				{
					title: "Костюмы",
					items: ["Деловые", "Спортивные", "Ещё"],
				},
				{
					title: "Рубашки",
					items: ["Классические", "Повседневные"],
				},
			],
		},
		{
			title: "Мужская одежда",
			subcategories: [
				{
					title: "Костюмы",
					items: ["Деловые", "Спортивные", "Ещё"],
				},
				{
					title: "Рубашки",
					items: ["Классические", "Повседневные"],
				},
			],
		},
		{
			title: "Мужская одежда",
			subcategories: [
				{
					title: "Костюмы",
					items: ["Деловые", "Спортивные", "Ещё"],
				},
				{
					title: "Рубашки",
					items: ["Классические", "Повседневные"],
				},
			],
		},
	];

	const handleMouseEnter = (index) => {
		setActiveCategory(index);
	};

	const handleMouseLeave = () => {
		setActiveCategory(null);
	};

	return (
		<div className="catalog">
			<div className="catalog-sidebar">
				{catalogData.map((category, index) => (
					<div
						key={index}
						className={`sidebar-item ${activeCategory === index ? "active" : ""}`}
						onMouseEnter={() => handleMouseEnter(index)}
					>
						<div className="sidebar-title">
							<IoPhonePortraitOutline className="icon" />
							{category.title}
							<FaChevronRight className="chevron-icon" />
						</div>
					</div>
				))}
			</div>

			{activeCategory !== null && (
				<div className="catalog-content">
					<div className="subcategory-panel">
						<h2>{catalogData[activeCategory].title}</h2>
						<div className="subcategories">
							{catalogData[activeCategory].subcategories.map((subcategory, index) => (
								<div key={index} className="subcategory">
									<h3>{subcategory.title}</h3>
									<ul>
										{subcategory.items.map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Catalog;
