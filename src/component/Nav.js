import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { token, destroyToken } from '../config/request'

export const Nav = () => {
	let navigate = useNavigate()
	const logout = () => {
		destroyToken()
		return navigate('/sign-in')
	}
	return (
		<>
			<nav class='site-header sticky-top navbar navbar-expand-lg navbar-light bg-light'>
				<div class='container-fluid'>
					<a class='navbar-brand text-primary' href='#0'>
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
								<Link class='nav-link active' aria-current='page' to='/'>
									Home
								</Link>
							</li>
						</ul>

						{token ? (
							<>
								<Link
									to='/add'
									className='py-2 mx-2 d-none d-md-inline-block btn btn-primary'
								>
									Add New Item
								</Link>

								<Link
									to='#0'
									className='py-2 d-none d-md-inline-block btn btn-outline-primary'
									onClick={() => logout()}
								>
									Logout
								</Link>
							</>
						) : (
							<>
								<Link
									to='/sign-up'
									className='py-2 d-none d-md-inline-block btn btn-outline-primary'
								>
									Join
								</Link>

								<Link
									to='/sign-in'
									className='py-2 d-none d-md-inline-block btn btn-primary mx-2'
								>
									Login
								</Link>
							</>
						)}
					</div>
				</div>
			</nav>
		</>
	)
}
