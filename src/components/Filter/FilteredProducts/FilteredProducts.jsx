import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './FilteredProducts.css';
import { IoCalendarOutline } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { BiCategory } from 'react-icons/bi';
import { PiList } from 'react-icons/pi';
import FilteredProductComponent from './FilteredProductComponent/FilteredProductComponent';

function FilteredProducts() {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	return (
		<div className="filtered-products">
			<div className="filter-header">
				<div className="date-picker">
					<DatePicker
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						selectsStart
						startDate={startDate}
						endDate={endDate}
						placeholderText="Дата начала"
						dateFormat="dd.MM.yyyy"
					/>
					<span> - </span>
					<DatePicker
						selected={endDate}
						onChange={(date) => setEndDate(date)}
						selectsEnd
						startDate={startDate}
						endDate={endDate}
						placeholderText="Дата окончания"
						dateFormat="dd.MM.yyyy"
					/>
					<IoCalendarOutline className="calendar-icon" />
				</div>
				<div className="view-buttons">
					<button className="view-btn active">
						<FaLocationDot className="icon" />
						На карте
					</button>
					<div className='ct-btns active'>
						<button className="view-btn">
							<BiCategory className="icon" />
						</button>
						<button className="view-btn">
							<PiList className="icon" />
						</button>
					</div>
				</div>
			</div>
			<div className="filter-buttons">
				<button className="filter-btn">Самые новые</button>
				<button className="filter-btn">Самые дешевые</button>
				<button className="filter-btn">Самые дорогие</button>
				<button className="filter-btn">Близка</button>
				<button className="filter-btn">Наиболее просматриваемые</button>
				<button className="filter-btn">Больше всего лайков</button>
			</div>


			<div className='Paginations'>
				<FilteredProductComponent />
			</div>
		</div>
	);
}

export default FilteredProducts;
