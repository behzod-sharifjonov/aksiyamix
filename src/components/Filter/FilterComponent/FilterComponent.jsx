import React, { useState } from "react";
import "./FilterComponent.css";

const FilterComponent = () => {
	const [priceRange, setPriceRange] = useState({ min: 0, max: 5000000 });
	const [selectedValues, setSelectedValues] = useState({
		discount: "",
		memory: [],
		ram: [],
		display: [],
		wireless: [],
		color: [],
		material: "",
		type: "",
		camera: "",
	});

	const handleCheckboxChange = (key, value) => {
		setSelectedValues((prevState) => {
			const currentValues = prevState[key];
			const updatedValues = currentValues.includes(value)
				? currentValues.filter((item) => item !== value)
				: [...currentValues, value];
			return { ...prevState, [key]: updatedValues };
		});
	};

	return (
		<aside className="filter-container">
			<button
				className="reset-button"
				onClick={() =>
					setSelectedValues({
						discount: "",
						memory: [],
						ram: [],
						display: [],
						wireless: [],
						color: [],
						material: "",
						type: "",
						camera: "",
					})
				}
			>
				Сбросить фильтры
			</button>

			<div className="filter-section">
				<h4 className="filter-section-title">Цена (сум)</h4>
				<div className="price-slider">
					<div className="price-inputs">
						<input
							type="number"
							min="0"
							value={priceRange.min}
							onChange={(e) =>
								setPriceRange({ ...priceRange, min: e.target.value })
							}
						/>
						<span>—</span>
						<input
							type="number"
							max="5000000"
							value={priceRange.max}
							onChange={(e) =>
								setPriceRange({ ...priceRange, max: e.target.value })
							}
						/>
					</div>
					<input
						type="range"
						min="0"
						max="5000000"
						value={priceRange.min}
						className="slider"
						onChange={(e) =>
							setPriceRange({ ...priceRange, min: e.target.value })
						}
					/>
					<input
						type="range"
						min="0"
						max="5000000"
						value={priceRange.max}
						className="slider"
						onChange={(e) =>
							setPriceRange({ ...priceRange, max: e.target.value })
						}
					/>
				</div>
			</div>

			<div className="filter-section">
				<h4 className="filter-section-title">Размер скидки</h4>
				<ul className="filter-list">
					{["Не важно", "5% и более", "10% и более", "30% и более"].map(
						(item, index) => (
							<li key={index}>
								<label className="filter-label">
									<input
										type=""
										name="discount"
										value={item}
										checked={selectedValues.discount === item}
										onChange={() =>
											setSelectedValues((prevState) => ({
												...prevState,
												discount: item,
											}))
										}
									/>
									{/* <span className="filter-label-text">{item}</span> */}
								</label>
							</li>
						)
					)}
				</ul>
			</div>

			<div className="filter-section">
				<h4 className="filter-section-title">Встроенная память</h4>
				<ul className="filter-list">
					{["128 Гб", "64 Гб", "32 Гб", "16 Гб"].map((item, index) => (
						<li key={index}>
							<label className="filter-label">
								<input
									type="checkbox"
									value={item}
									checked={selectedValues.memory.includes(item)}
									onChange={() => handleCheckboxChange("memory", item)}
								/>
								<span className="filter-label-text">{item}</span>
							</label>
						</li>
					))}
				</ul>
			</div>

			<div className="filter-section">
				<h4 className="filter-section-title">Оперативная память</h4>
				<ul className="filter-list">
					{["4 Гб", "3 Гб", "меньше 2 Гб"].map((item, index) => (
						<li key={index}>
							<label className="filter-label">
								<input
									type="checkbox"
									value={item}
									checked={selectedValues.ram.includes(item)}
									onChange={() => handleCheckboxChange("ram", item)}
								/>
								<span className="filter-label-text">{item}</span>
							</label>
						</li>
					))}
				</ul>
			</div>

			<div className="filter-section">
				<h4 className="filter-section-title">Разрешение дисплея</h4>
				<ul className="filter-list">
					{["96×68", "1280×720 (HD)", "1440×720"].map((item, index) => (
						<li key={index}>
							<label className="filter-label">
								<input
									type="checkbox"
									value={item}
									checked={selectedValues.display.includes(item)}
									onChange={() => handleCheckboxChange("display", item)}
								/>
								<span className="filter-label-text">{item}</span>
							</label>
						</li>
					))}
				</ul>
			</div>

			<div className="filter-section">
				<h4 className="filter-section-title">Беспроводные технологии</h4>
				<ul className="filter-list">
					{["3G", "5G", "Wi-Fi", "Bluetooth"].map((item, index) => (
						<li key={index}>
							<label className="filter-label">
								<input
									type="checkbox"
									value={item}
									checked={selectedValues.wireless.includes(item)}
									onChange={() => handleCheckboxChange("wireless", item)}
								/>
								<span className="filter-label-text">{item}</span>
							</label>
						</li>
					))}
				</ul>
			</div>

			<div className="filter-section">
				<h4 className="filter-section-title">Емкость аккумулятора (мАч)</h4>
				<div className="price-slider">
					<div className="price-inputs">
						<input type="number" min="600" placeholder="от 600" />
						<span>—</span>
						<input type="number" max="12500" placeholder="до 12500" />
					</div>
				</div>
			</div>

			<div className="filter-section">
				<h4 className="filter-section-title">Цвет корпуса</h4>
				<ul className="filter-list">
					{["Голубой", "Зеленый", "Красный", "Черный"].map((item, index) => (
						<li key={index}>
							<label className="filter-label">
								<input
									type="checkbox"
									value={item}
									checked={selectedValues.color.includes(item)}
									onChange={() => handleCheckboxChange("color", item)}
								/>
								<span className="filter-label-text">{item}</span>
							</label>
						</li>
					))}
				</ul>
			</div>

			<div className="filter-section">
				<h4 className="filter-section-title">Материал корпуса</h4>
				<ul className="filter-list">
					{["пластик", "металл", "хрезина"].map((item, index) => (
						<li key={index}>
							<label className="filter-label">
								<input
									type="radio"
									name="material"
									value={item}
									checked={selectedValues.material === item}
									onChange={() =>
										setSelectedValues((prevState) => ({
											...prevState,
											material: item,
										}))
									}
								/>
								<span className="filter-label-text">{item}</span>
							</label>
						</li>
					))}
				</ul>
			</div>

			<div className="filter-section">
				<h4 className="filter-section-title">Тип корпуса</h4>
				<ul className="filter-list">
					{["моноблок", "раскладушка"].map((item, index) => (
						<li key={index}>
							<label className="filter-label">
								<input
									type="radio"
									name="type"
									value={item}
									checked={selectedValues.type === item}
									onChange={() =>
										setSelectedValues((prevState) => ({
											...prevState,
											type: item,
										}))
									}
								/>
								<span className="filter-label-text">{item}</span>
							</label>
						</li>
					))}
				</ul>
			</div>

			<div className="filter-section">
				<h4 className="filter-section-title">Фронтальная камера</h4>
				<ul className="filter-list">
					{["есть", "нет"].map((item, index) => (
						<li key={index}>
							<label className="filter-label">
								<input
									type="radio"
									name="camera"
									value={item}
									checked={selectedValues.camera === item}
									onChange={() =>
										setSelectedValues((prevState) => ({
											...prevState,
											camera: item,
										}))
									}
								/>
								<span className="filter-label-text">{item}</span>
							</label>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default FilterComponent;
