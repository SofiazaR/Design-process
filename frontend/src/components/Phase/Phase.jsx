import React from 'react'
import './Phase.css'
import { stars_list } from '../../assets/assets'

const Phase = ({phase,SetPhase}) => {
    

    return (
        <div className='design-phase'>
            <h1>Выбор стадии проектирования</h1>
            <div className="phase-container">
                <div className="explore-stars-list">
                    {stars_list.map((item, index) => {
                        return (
                            <div onClick={()=>SetPhase(prev=>prev===item.star_name?"All":item.star_name)} key={index} className="explore-stars-list-item">
                                <div className="star">
                                    <img className={phase===item.star_name?"active":""} src={item.star_image} alt="" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default Phase