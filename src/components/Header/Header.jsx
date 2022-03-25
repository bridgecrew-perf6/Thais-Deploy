import React from 'react'

import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	NavLink
} from 'react-router-dom'
import './Header.css'

function Header() {
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<img
							src="../src/assets/icone.png"
							alt=""
							width="35"
							height="50"
							className="d-inline-block align-text-center"
						/>
						Viva! Viagens, a sua agência de viagens favorita.
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse " id="navbarNav">
						<ul className="navbar-nav align-text-right">
							<li className="nav-item">
								<NavLink className="nav-link" aria-current="page" to="/">
									Home <span className="glyphicon glyphicon-home"></span>
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/Destinos">
									Destinos
									<span
										className="
                    glyphicon glyph-icon-airplane"
									></span>
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/Promocoes">
									Promoções <span className="glyphicon glyphicon-gift"></span>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
export default Header
