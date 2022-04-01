import React from 'react'
import { Link } from 'react-router-dom'
import { CardItem, CardItems, Nav } from '../component'

export const FashionDetail = () => {
	return (
		<>
			<Nav />
			<div>
				{/* header section */}
				<div
					style={{
						backgroundImage: `url('https://images.pexels.com/photos/3854884/pexels-photo-3854884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
						backgroundSize: '100%',
						backgroundRepeat: 'no-repeat',
						padding: '200px',
					}}
				>
					<h1 className='text-primary'>Fashion Style</h1>
					<p>
						find your next outfit for your outings like{' '}
						<span className='text-primary px-1'>birthday</span>,
						<span className='text-primary px-1'>weeding</span>,
						<span className='text-primary px-1'>bridal shower</span>
					</p>
					<div>
						<Link to='#0' className='text-muted'>
							go back
						</Link>
						<Link to='#0' className='btn btn-outline-primary mx-4'>
							order now
						</Link>
					</div>
				</div>
				{/*end of header section  */}
				{/*  */}
				<div className='container'>
					<div className=' p-5' style={{ lineHeight: '40px' }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sequi
						exercitationem molestiae neque a error repellendus repudiandae blanditiis
						accusantium necessitatibus tenetur facilis quasi illo. Exercitationem
						dolor nam quisquam illo odit fugiat sit in aperiam quasi magnam dolores,
						ut labore quibusdam assumenda neque fugit quo unde consequatur harum
						eveniet hic quis? Nemo necessitatibus voluptatem voluptates maxime! Illum
						beatae tempora, ullam perferendis corporis error ratione id nesciunt culpa
						suscipit amet similique aspernatur temporibus ipsam porro reiciendis
						necessitatibus quaerat sit reprehenderit quasi.
						<div className='row p-5'>
							<div className='col'>
								<div class='card' style={{ width: '15rem' }}>
									<img
										src='https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
										class='card-img-top'
										alt='...'
									/>
								</div>
							</div>
							{/* 2 */}
							<div className='col'>
								<div class='card' style={{ width: '15rem' }}>
									<img
										src='https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
										class='card-img-top'
										alt='...'
									/>
								</div>
							</div>
							{/* 3:: https://images.pexels.com/photos/972884/pexels-photo-972884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */}
							<div className='col'>
								<div class='card' style={{ width: '15rem' }}>
									<img
										src='https://images.pexels.com/photos/972884/pexels-photo-972884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
										class='card-img-top'
										alt='...'
									/>
								</div>
							</div>

							{/* 4:: https://images.pexels.com/photos/972887/pexels-photo-972887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */}
							<div className='col'>
								<div class='card' style={{ width: '15rem' }}>
									<img
										src='https://images.pexels.com/photos/972887/pexels-photo-972887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
										class='card-img-top'
										alt='...'
									/>
								</div>
							</div>
						</div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sequi
						exercitationem molestiae neque a error repellendus repudiandae blanditiis
						accusantium necessitatibus tenetur facilis quasi illo. Exercitationem
						dolor nam quisquam illo odit fugiat sit in aperiam quasi magnam dolores,
						ut labore quibusdam assumenda neque fugit quo unde consequatur harum
						eveniet hic quis? Nemo necessitatibus voluptatem voluptates maxime! Illum
						beatae tempora, ullam perferendis corporis error ratione id nesciunt culpa
						suscipit amet similique aspernatur temporibus ipsam porro reiciendis
						necessitatibus quaerat sit reprehenderit quasi.
					</div>
				</div>

				{/*  */}
			</div>
		</>
	)
}
