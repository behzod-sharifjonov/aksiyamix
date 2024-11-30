import React, { useState } from 'react';
import './FilteredProductComponent.css';

function FilteredProductComponent({ product }) {
	const [currentPage, setCurrentPage] = useState(1); 

	const totalPages = 7; 

	const handlePageClick = (page) => {
		setCurrentPage(page);
	};

	const handleNextClick = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<div>
			<div className="pagination">
				{Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
					<button
						key={page}
						className={`pagination-button ${page === currentPage ? 'active' : ''}`}
						onClick={() => handlePageClick(page)}
					>
						{page}
					</button>
				))}
				<span className="dots">...</span>
				<button className="next-button" onClick={handleNextClick}>
					Дальше
				</button>
			</div>
		</div>
	);
}

export default FilteredProductComponent;
