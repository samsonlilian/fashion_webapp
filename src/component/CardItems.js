import React from 'react'
import { data } from '../config/sampleData'
import { CardItem } from './CardItem'

export const CardItems = () => {
	return (
		<>
			<div className='row  px-3 py-4'>
				{/*  */}
				{data.map((fashion) => (
					<div className='col-3'>
						<CardItem
							title={fashion.title}
							desc={fashion.desc}
							imgUrl={fashion.img}
						/>
					</div>
				))}

				{/*  */}
			</div>
		</>
	)
}
