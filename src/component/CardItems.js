import React from 'react'
import { CardItem } from './CardItem'

export const CardItems = () => {
	return (
		<>
			<div className='row  px-3 py-4'>
				<div className='col'>
					<CardItem
						title='lorem fashion lore'
						desc='lorem lorem loem king of fashion fashion description'
						imgUrl='https://images.pexels.com/photos/3854884/pexels-photo-3854884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					/>
				</div>
				<div className='col'>
					<CardItem
						title='lorem fashion lore'
						desc='lorem lorem loem king of fashion fashion description'
						imgUrl='https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					/>
				</div>
				<div className='col'>
					<CardItem
						title='lorem fashion lore'
						desc='lorem lorem loem king of fashion fashion description'
						imgUrl='https://images.pexels.com/photos/1334881/pexels-photo-1334881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					/>
				</div>
				<div className='col'>
					<CardItem
						title='lorem fashion lore'
						desc='lorem lorem loem king of fashion fashion description'
						imgUrl='https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					/>
				</div>
			</div>
		</>
	)
}
