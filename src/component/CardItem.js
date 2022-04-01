import React from 'react'

export const CardItem = ({ imgUrl, title, desc }) => {
	return (
		<>
			<div className='card' style={{ width: '18rem' }}>
				<img src={imgUrl} className='card-img-top' alt='...' />
				<div className='card-body'>
					<h5 className='card-title'>{title}</h5>
					<p className='card-text'>{desc}</p>
				</div>

				<div className='card-body py-2'>
					<a href='#0' className='card-link btn btn-primary'>
						view
					</a>
					<a href='#0' className='card-link btn btn-outline-primary'>
						order
					</a>
				</div>
			</div>
		</>
	)
}
