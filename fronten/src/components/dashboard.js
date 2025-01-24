import React from 'react'

import './../index.css';

const Dashboard = () => {
    return (
        <div>
            <header>
                <h1>KAU MODERN HOUSEHOLDS</h1>
                <nav>
                    <ul>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Hotline</a></li>
                    </ul>
                </nav>
            </header>

            <div className="hero">
                <img src="https://via.placeholder.com/400" alt="top seller" />
                <div className="hero-content">
                    <h2>Our Top Seller</h2>
                    <p>You can get your quality dream home products here, buy paying Cash or Pay Later</p>
                    <p className="price"> Ksh 20000</p>
                    <button>Order now</button>
                </div>
            </div>

            <section className="products">
                <div className="product-card">
                    <img src="https://via.placeholder.com/150" alt="Televisions" />
                    <h3>Samsung Tv</h3>
                    <p className="price">Ksh 20000</p>
                </div>
                <div className="product-card">
                    <img src="https://via.placeholder.com/150" alt="Quality kitchen" />
                    <h3>Kitchenware</h3>
                    <p className="price">Ksh 8000</p>
                </div>
                <div className="product-card">
                    <img src="https://via.placeholder.com/150" alt="Refigrators" />
                    <h3>Fridge</h3>
                    <p className="price">Ksh 20000</p>
                </div>
                <div className="product-card">
                    <img src="https://via.placeholder.com/150" alt="cookers" />
                    <h3>Cookers</h3>
                    <p className="price">Ksh 15000</p>
                </div>
            </section>

            <footer>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </footer>
        </div>
    );
};

export default Dashboard;

