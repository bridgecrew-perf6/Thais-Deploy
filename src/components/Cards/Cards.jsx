import React from 'react';
import './Cards.css';

 function Card () {
  return (
		<ul className="cards">
			<li>
				<a href="" className="card">
					<img src="/londres.jpg" className="card__image" alt="" />
					<div className="card__overlay">
						<div className="card__header">
							<svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
								<path />
							</svg>
							<img className="card__thumb" src="/madonna.jpg" alt="" />
							<div className="card__header-text">
								<h3 className="card__title">Marcela Luísa Ciccone</h3>
								<span className="card__status">Deu 5 estrelas</span>
							</div>
						</div>
						<p className="card__description">"Sempre vou viajar pela Viva!"</p>
					</div>
				</a>
			</li>
			<li>
				<a href="" className="card">
					<img src="/sydney.jpg" className="card__image" alt="" />
					<div className="card__overlay">
						<div className="card__header">
							<svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
								<path />
							</svg>
							<img className="card__thumb" src="/marina.jpg" alt="" />
							<div className="card__header-text">
								<h3 className="card__title">Marina Diamante</h3>
								<span className="card__status">Deu 5 estelas</span>
							</div>
						</div>
						<p className="card__description">
							"Sempre pensando nos clientes, amei a viagem para a Australia!"
						</p>
					</div>
				</a>
			</li>
			<li>
				<a href="" className="card">
					<img src="/paris.jpg" className="card__image" alt="" />
					<div className="card__overlay">
						<div className="card__header">
							<svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
								<path />
							</svg>
							<img className="card__thumb" src="/julian.jpg" alt="" />
							<div className="card__header-text">
								<h3 className="card__title">Juliano Casa Branca</h3>
								<span className="card__tagline"></span>
								<span className="card__status">Deu 5 estrelas</span>
							</div>
						</div>
						<p className="card__description">
							"A Viva Viagens me proporcionou uma ótima experiência!"
						</p>
					</div>
				</a>
			</li>
		</ul>
	)
}
export default Card