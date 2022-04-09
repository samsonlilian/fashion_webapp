import React from 'react'

import { CardItem } from './CardItem'

export const CardItems = ({ items }) => {
	return (
		<>
			<div className='row  px-3 py-4'>
				{/*  */}
				{items.map((fashion, i = 0) => (
					<div className='col-3 px-2 py-3' key={i}>
						<CardItem
							id={fashion.id}
							title={fashion.title}
							desc={fashion.desc}
							imgUrl={fashion.cover_img}
						/>
					</div>
				))}

				{/*  */}
			</div>
		</>
	)
}
