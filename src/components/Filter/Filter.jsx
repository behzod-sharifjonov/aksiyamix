import React from 'react'
import FilterComponent from './FilterComponent/FilterComponent'
import FilteredProducts from './FilteredProducts/FilteredProducts'
import './Filter.css'
export default function Filter() {
	return (
		<div className='box'>
			<FilterComponent />
			<FilteredProducts />
		</div>
	)
}
