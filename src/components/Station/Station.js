import React from "react";
import './Station.css'

const Station = (props) => {
    console.log(props)
    return (props.buttonPopup) ? (
        <div className="station">
            <div className="flex">
                <h1 className="station__name-large">{props.chosen_node.city.split(',')[0]} вокзал</h1>
                <button className="btn-close" onClick={()=>props.setButtonPopup(prev=> !prev)}></button>
            </div>
            <span className="station__location">{props.chosen_node.city.split(',').slice(1).join(',')}</span>
                <span className="station__org">{props.chosen_node.title} вокзал</span>
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
            <span className="station__reviews">1 Отзыв</span>
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