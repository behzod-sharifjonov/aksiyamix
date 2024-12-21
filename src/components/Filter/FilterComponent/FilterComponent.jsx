import React, { useState } from "react";
import "./FilterComponent.css";
import { Range } from "react-range";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const FilterComponent = () => {
	const [priceRange, setPriceRange] = useState([0, 5000000]);
	const [inventorOpen, setInventerOpen] = useState(true)
	const [discountOpen, setDiscountOpen] = useState(true)
	const [memoryOpen, setMemoryOpen] = useState(true)
	const [operativeMemoryOpen, setOperativeMemoryOpen] = useState(true)
	const [displayOpen, setDisplayOpen] = useState(true)
	const [wirelessOpen, setWirelessOpen] = useState(true)
	const [corpusColorOpen, setCorpusColorOpen] = useState(true)
	const [corpusMaterialOpen, setCorpusMaterialOpen] = useState(true)
	const [materialTypeOpen, setMaterialTypeOpen] = useState(true)
	const [cameraOpen, setCameraOpen] = useState(true)
	const STEP = 1000;
	const MIN = 0;
	const MAX = 5000000;
	const MIN_INTERVAL = 500000;
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
	const handleRangeChange = (values) => {
		const [min, max] = values;
		if (max - min >= MIN_INTERVAL) {
			setPriceRange(values);
		}
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
							min={MIN}
							max={MAX}
							value={priceRange[0]}
							onChange={(e) =>
								handleRangeChange([Math.max(MIN, e.target.value), priceRange[1]])
							}
						/>
						<span>—</span>
						<input
							type="number"
							min={MIN}
							max={MAX}
							value={priceRange[1]}
							onChange={(e) =>
								handleRangeChange([priceRange[0], Math.min(MAX, e.target.value)])
							}
						/>
					</div>
					<Range
						step={STEP}
						min={MIN}
						max={MAX}
						values={priceRange}
						onChange={handleRangeChange}
						renderTrack={({ props, children }) => (
							<div
								{...props}
								style={{
									...props.style,
									height: "6px",
									width: "100%",
									background: "#ddd",
									borderRadius: "5px",
									position: "relative",
								}}
							>
								<div
									style={{
										position: "absolute",
										height: "100%",
										background: "#ff4081",
										borderRadius: "5px",
										left: `${((priceRange[0] - MIN) / (MAX - MIN)) * 100}%`,
										width: `${((priceRange[1] - priceRange[0]) / (MAX - MIN)) * 100}%`,
									}}
								/>
								{children}
							</div>
						)}
						renderThumb={({ props }) => (
							<div
								{...props}
								style={{
									...props.style,
									height: "18px",
									width: "18px",
									borderRadius: "50%",
									backgroundColor: "#ff4081",
									cursor: "pointer",
									boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
								}}
							/>
						)}
					/>
				</div>
			</div>
			<div className="filter-section">
				<div>
					<h1 className="filter-section-title">Производитель <button onClick={() => setInventerOpen(item => !item)}>{inventorOpen ? <FaAngleDown /> : <FaAngleUp />}</button></h1>
					{inventorOpen && (
						<div>

							<div className="fitered-inventor">

								<input type="text" placeholder="Ведите производителя" />
								<div className="filtered-list-buttons">
									{[{ title: 'Samsung', count: 3, }, { title: 'Philips', count: 2, }, { title: 'ZTE', count: 12, }, { title: 'Nokia', count: 23, }, { title: 'Fly', count: 112, }, { title: 'Apple', count: 10, }, { title: 'BQ', count: 23, }, { title: 'Huawei', count: 45, }, { title: 'Xiaomi', count: 19, },]?.map((item, index) => (
										<div key={index + 1}>
											<p>{item?.title}</p>
											<span>{item?.count}</span>
										</div>
									))}
								</div>
							</div>
							<button className="show-all">Показать все <span>+</span></button>
						</div>
					)}
				</div>
			</div>
			<div className="filter-section">
				<h1 className="filter-section-title">Размер скидки <button onClick={() => setDiscountOpen(item => !item)}>{discountOpen ? <FaAngleDown /> : <FaAngleUp />}</button></h1>
				{discountOpen && (
					<div className="filtered-list-buttons">
						{["Не важно", "5% и более", "10% и более", "30% и более"].map(
							(item, index) => (
								<div>
									<p>{item}</p>
									<span>{index}</span>
								</div>
							)
						)}
					</div>
				)}
			</div>

			<div className="filter-section">
				<h1 className="filter-section-title">Встроенная память <button onClick={() => setMemoryOpen(item => !item)}>{memoryOpen ? <FaAngleDown /> : <FaAngleUp />}</button></h1>
				{memoryOpen && (

					<div className="filtered-list-buttons">
						{["128 Гб", "64 Гб", "32 Гб", "16 Гб", "8 Гб", "4 Гб"].map((item, index) => (
							<div key={index}>
								<p>{item}</p>
								<span>{index}</span>
							</div>
						))}
					</div>
				)}
			</div>

			<div className="filter-section">
				<h1 className="filter-section-title">Оперативная память <button onClick={() => setOperativeMemoryOpen(item => !item)}>{operativeMemoryOpen ? <FaAngleDown /> : <FaAngleUp />}</button></h1>
				{operativeMemoryOpen && (

					<div className="filtered-list-buttons">
						{["4 Гб", "3 Гб", "меньше 2 Гб"].map((item, index) => (
							<div>
								<p>{item}</p>
								<span>{index + 13}</span>
							</div>
						))}
					</div>
				)}
			</div>

			<div className="filter-section">
				<h1 className="filter-section-title">Разрешение дисплея <button onClick={() => setDisplayOpen(item => !item)}>{displayOpen ? <FaAngleDown /> : <FaAngleUp />}</button></h1>
				{displayOpen && (
					<div>

						<div className="filtered-list-buttons">
							{["96×68", "160x128", "220x176", "320x240", "480x320", "800x480", "854x480", "960x480", "1280×720 (HD)", "1440×720",].map((item, index) => (
								<div>
									<p>{item}</p>
									<span>{index + 17}</span>
								</div>
							))}
						</div>
						<button className="show-all">Показать все <span>+</span></button>
					</div>
				)}
			</div>

			<div className="filter-section">
				<h1 className="filter-section-title">Беспроводные технологии <button onClick={() => setWirelessOpen(item => !item)}>{wirelessOpen ? <FaAngleDown /> : <FaAngleUp />}</button></h1>
				{wirelessOpen && (

					<div className="filtered-list-buttons">
						{["3G", "5G", "Wi-Fi", "Bluetooth"].map((item, index) => (
							<div>
								<p>{item}</p>
								<span>{index + 13}</span>
							</div>
						))}
					</div>
				)}
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
				<h1 className="filter-section-title">Цвет корпуса <button onClick={() => setCorpusColorOpen(item => !item)}>{corpusColorOpen ? <FaAngleDown /> : <FaAngleUp />}</button></h1>
				{corpusColorOpen && (

					<div className="filtered-list-buttons">
						{[{ title: "Голубой", color: '#00C2FF' }, { title: "Зеленый", color: '#29B765' }, { title: "Красный", color: '#FF0000' }, { title: "Оранжевый", color: '#FF4800' }, { title: "Серый", color: '#A0A0A0' }, { title: "Синий", color: '#1918CC' }, { title: "Фиолетовый", color: '#8200FE' }, { title: "Черный", color: '#000000' }].map((item, index) => (
							<div>
								<b style={{ width: '12px', height: '12px', background: item.color, borderRadius: '50%', marginRight: '4px' }}>

								</b>
								<p>{item.title}</p>
								<span>{index + 10}</span>
							</div>
						))}
					</div>
				)}
			</div>

			<div className="filter-section">
				<h1 className="filter-section-title">Материал корпуса<button onClick={() => setCorpusMaterialOpen(item => !item)}>{corpusMaterialOpen ? <FaAngleDown /> : <FaAngleUp />}</button></h1>
				{corpusMaterialOpen && (

					<ul className="filtered-list-buttons">
						{["пластик", "металл", "резина"].map((item, index) => (
							<div>
								<p>{item}</p>
								<span>{index + 19}</span>
							</div>
						))}
					</ul>
				)}
			</div>

			<div className="filter-section">
				<h1 className="filter-section-title">Тип корпуса<button onClick={() => setMaterialTypeOpen(item => !item)}>{materialTypeOpen ? <FaAngleDown /> : <FaAngleUp />}</button></h1>
				{materialTypeOpen && (

					<div className="filtered-list-buttons">
						{["моноблок", "раскладушка"].map((item, index) => (
							<div>
								<p>{item}</p>
								<span>{index + 14}</span>
							</div>
						))}
					</div>
				)}
			</div>

			<div className="filter-section" style={{borderBottom: '0px',paddingBottom:'0px'}}>
				<h1 className="filter-section-title">Фронтальная камера<button onClick={() => setCameraOpen(item => !item)}>{cameraOpen ? <FaAngleDown /> : <FaAngleUp />}</button></h1>
				{cameraOpen && (

					<div className="filtered-list-buttons">
						{["моноблок", "раскладушка"].map((item, index) => (
							<div>
								<p>{item}</p>
								<span>{index+13}</span>
							</div>
						))}
					</div>
				)}
			</div>
		</aside>
	);
};

export default FilterComponent;
