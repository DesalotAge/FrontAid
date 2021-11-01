import React from "react";
import './Sidebar.css';
import { useState } from "react";
import Station from "../Station";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
    const [buttonPopup, setButtonPopup] = useState(false)
    const openPopup = () => {
        setButtonPopup(prev => !prev)
    }
    console.log(props);

    if (!props.chosen_node) {
        return (
            <div className="sidebar">
                <header className="header">
                    <a href="#">
                        <img src="/logo.png"/>
                    </a>
                </header>
                <form>
                    <input type="text" placeholder="Поиск вокзала" value="Поиск вокзала" className="input__search"/>
                </form>
                <ul className="stations_list">
                    <h3>Станция не выбрана</h3>
                </ul>
            </div>
        )
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
            {/* <ul className="tags__list">
                <li className="tags__list-item">Москва</li>
            </ul> */}
            {/* <h1>{props.chosen_node.name}</h1> */}
            <ul className="stations__list">
                <div className="stations__list-header">{props.chosen_node.city.split(',')[0]}</div>
                <li className="stations__list-item">
                    <div className="item-content">
                        <h3 className="station__name existing">{props.chosen_node.title} вокзал</h3>
                        <span className="station__location">{props.chosen_node.city.split(',').slice(1).join(',')}</span>
                        <span className="station__org">Ж/Д станция {props.chosen_node.title}</span>
                        <ul className="station__importance">
                            <li className="importance">
                                <span className="imp">{Math.round(props.chosen_node.closeness_centrality * 100000) / 1000}</span>
                                <span>Возможность добраться до ближайших станций</span>
                            </li>
                            <li className="importance">
                                <span className="not-imp">{Math.round(props.chosen_node.betweenness_centrality * 100000) / 1000}</span>
                                <span>Важность для переезда</span>
                            </li>
                            <li className="importance">
                                <span className="gr-imp">{Math.round(props.chosen_node.katz_centrality * 100000) / 1000}</span>
                                <span>Вероятность оказаться в этом вокзале</span>
                            </li>
                        </ul>
                        <button className="station__review">1 Отзыв</button>
                        
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