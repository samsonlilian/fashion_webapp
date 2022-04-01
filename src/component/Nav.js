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
							<li class='nav-item dropdown'>
								<a
									class='nav-link dropdown-toggle'
									href='#'
									id='navbarDropdown'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								>
									Categories
								</a>
								<ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
									<li>
										<a class='dropdown-item' href='#'>
											Action
										</a>
									</li>
									<li>
										<a class='dropdown-item' href='#'>
											Another action
										</a>
									</li>
									<li>
										<hr class='dropdown-divider' />
									</li>
									<li>
										<a class='dropdown-item' href='#'>
											Something else here
										</a>
									</li>
								</ul>
							</li>
						</ul>

						<a
							href='#0'
							className='py-2 d-none d-md-inline-block btn btn-outline-primary'
							data-toggle='modal'
							data-target='#exampleModalCenter'
						>
							Join
						</a>

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
