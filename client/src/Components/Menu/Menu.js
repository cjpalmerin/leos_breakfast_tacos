import React from 'react';
import './Menu.css';

import Tacos from '../../images/photo-1518830686998-b8847466b372.jpeg'

export class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <h2>Menu</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Those Breakfast Tacos</h3>
                            <ul className="menu-list">
                                <li>Chorizo - $3.00</li>
                                <p className="description">Chorizo, Eggs, Queso Chihuahua, Refried Beans, Salsa Secreta, Choice of Flour or Corn Tortillas</p>
                                <li>Carnitas - $3.00</li>
                                <p className="description">Carnitas, Eggs, Queso Chihuahua, Refried Beans, Salsa Secreta, Choice of Flour or Corn Tortillas</p>
                                <li>Carne Asada - $3.00</li>
                                <p className="description">Carne Asada, Eggs, Queso Chihuahua, Refried Beans, Salsa Secreta, Choice of Flour or Corn Tortillas</p>
                                <li>Al Pastor - $2.00</li>
                                <p className="description">Al Pastor, Eggs, Queso Chihuahua, Refried Beans, Salsa Secreta, Choice of Flour or Corn Tortillas</p>
                                <li>Pollo - $2.00</li>
                                <p className="description">Chicken, Eggs, Queso Chihuahua, Refried Beans, Salsa Secreta, Choice of Flour or Corn Tortillas</p>
                            </ul>
                            <br />
                            <br />

                            <h3>Those Breakfast Burritos</h3>
                            <ul className="menu-list">
                                <li>El Señor - $9.00</li>
                                <p className="description">Chorizo, Eggs, Queso Chihuahua, Potatoes, Refried Beans, Avocado, Salsa Secreta
</p>
                                <li>La Señorita - $9.00</li>
                                <p className="description">Al Pastor, Eggs, Queso Chihuahua, Potatoes, Refried Beans, Avocado, Salsa Secreta
</p>
                                <li>El Chico Grande - $9.00</li>
                                <p className="description">Carne Asada, Eggs, Queso Chihuahua, Potatoes, Refried Beans, Avocado, Salsa Secreta
</p>
                            </ul>
                            <br />
                            <br />

                            <h3>Those Breakfast Tortas</h3>
                            <ul className="menu-list">
                                <li>El Papa Grande - $10.00</li>
                                <p className="description">Chorizo, Eggs, Queso Chihuahua, Potatoes, Refried Beans, Salsa Secreta on French Bread</p>
                                <li>La Madre Grande - $10.00</li>
                                <p className="description">Al Pastor, Eggs, Queso Chihuahua, Potatoes, Refried Beans, Salsa Secreta on French Bread</p>
                                <li>Leo's Torta - $10.00</li>
                                <p className="description">Carne Asada, Eggs, Queso Chihuahua, Potatoes, Refried Beans, Salsa Secreta on French Bread</p>
                            </ul>
                            <br />
                            <br />
                            <h3>Those Sides</h3>
                            <ul className="menu-list">
                                <li>Rice - $1.00</li>
                                <br />
                                <li>Beans - $1.00</li>
                                <li>Scrambled Eggs - $1.00</li>
                                <li>Guacamole - $2.75</li>
                                <li>Chips and Guacamole $3.00</li>
                                <li>Chips and Homemade Salsa $2.00</li>
                                <li>Flour or Corn Tortillas - $3.00</li>


                            </ul>
                        </div>

                        <div className="col-lg-6">
                            <img src={Tacos} alt="Leos Tacos" className="taco-image" />
                            <br />
                            <br />

                            <h3>Desserts</h3>
                            <ul className="menu-list">
                                <li>Arroz con Leche $4.00</li>
                                <br />
                                <li>Tortillas Canelas $4.00</li>
                                <br />
                                <li>Tres Leches Cake - $4.00</li>
                                <br />
                                <br />
                            </ul>

                            <h3>Beverages</h3>
                            <ul className="menu-list">
                                <li>Orange Juice $1.00</li>
                                <br />
                                <li>Coffee - $1.00</li>
                                <br />
                                <li>Horchata - $1.00</li>
                                <br />
                                <li>Coke - $1.00</li>
                                <br />
                                <li>Jarritos - $1.00</li>

                            </ul>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
