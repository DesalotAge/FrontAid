import React from "react";
import './Station.css'

const Station = ({buttonPopup, setButtonPopup}) => {
    return (buttonPopup) ? (
        <div className="station">
            <div className="flex">
                <h1 className="station__name-large">Казанский вокзал</h1>
                <button className="btn-close" onClick={()=>setButtonPopup(prev=> !prev)}></button>
            </div>
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
            <span className="station__reviews">242 Отзыва</span>
            <ul className="reviews__list">
                <li className="reviews__list-item">
                    <div className="review__user">
                        <img className="" src="/user.png" />
                        <span className="user__name">Егор Шевченко</span>
                    </div>
                    <div className="review__content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </div>
                </li>
            </ul>
            <div className="btn-flex">
                <button className="primary-red-btn large">Написать отзыв</button>
                <button className="secondary-stroke-btn large">Смотреть все</button>
            </div>
        </div>
    ): null
}

export default Station