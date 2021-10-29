import React from "react";
import './Sidebar.css'
import { useState } from "react";
import Station from "../Station";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [buttonPopup, setButtonPopup] = useState(false)
    const openPopup = () => {
        setButtonPopup(prev=>!prev)
    }
    return(
        <div className="sidebar">
            <header className="header">
                <a href="#">
                    <img src="/logo.png"/>
                </a>
            </header>
            <form>
                <input type="text" placeholder="Поиск вокзала" value="Поиск вокзала" className="input__search"/>
            </form>
            <ul className="tags__list">
                {/* map((item) => return(
                    <li className="tags__list-item">{item.value}</li>
                )) */}
                <li className="tags__list-item">Москва</li>
            </ul>
            <ul className="stations__list">
                <div className="stations__list-header">МОСКВА</div>
                <li className="stations__list-item">
                    <div className="item-content">
                        <h3 className="station__name existing">Казанский вокзал</h3>
                        <span className="station__location">Комсомольская площадь, г.Москва</span>
                        <span className="station__org">Ж/Д станция Москва-Пассажирская-Казанская</span>
                        <ul className="station__importance">
                            <li className="importance">
                                <span className="imp">1</span>
                                <span>Важность соседей</span>
                            </li>
                            <li className="importance">
                                <span className="not-imp">0.3</span>
                                <span>Важность соседей</span>
                            </li>
                        </ul>
                        <button className="station__review">242 Отзыва</button>
                        
                        <div>
                            <button className="primary-red-btn"  >
                                <Link to="/comment" >
                                    Оставить отзыв
                                </Link>
                            </button>
                            <button className="secondary-stroke-btn" onClick={openPopup}>Подробнее</button>
                            <Station buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar