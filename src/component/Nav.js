import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
	return (
		<>
			<nav class='site-header sticky-top navbar navbar-expand-lg navbar-light bg-light'>
				<div class='container-fluid'>
					<a class='navbar-brand text-primary' href='#'>
						Fashion Style
					</a>
					<button
						class='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul class='navbar-nav me-auto mb-2 mb-lg-0'>
							<li class='nav-item'>
								<a class='nav-link active' aria-current='page' href='#'>
									Home
								</a>
							</li>
						</ul>

						<Link
							to='/sign-up'
							className='py-2 d-none d-md-inline-block btn btn-outline-primary'
						>
							Join
						</Link>

						<a
							href='#0'
							className='py-2 d-none d-md-inline-block btn btn-primary mx-2'
							data-toggle='modal'
							data-target='#exampleModalCenter'
						>
							Login
						</a>
					</div>
				</div>
			</nav>
		</>
	)
}
