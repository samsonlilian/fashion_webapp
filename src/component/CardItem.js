import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getReq, remote_url } from '../config/request'

export const CardItem = ({ imgUrl, title, desc, id }) => {
	return (
		<>
			<div className='card' style={{ width: '18rem' }}>
				<Link to={`fashion/${id}`}>
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
				</Link>
			</div>
		</>
	)
}
