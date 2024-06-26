import React from 'react'
import './Phase2.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Phase = ({ phase, SetPhase }) => {

    return (
        <div className='design-phase'>
            <h1>Выбор стадии проектирования</h1>
            <div className="phase-container">
                {/* whenClicked is a property not an event, per se. 
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
                */}
                <div className='star star-1'>
                    <button class="image-button"><Link to="/understand"><img src={assets.star_1} alt="" className='star-img' /></Link></button>
                </div>
                <div className='star star-2'>
                    <button class="image-button"><Link to="/observe"><img src={assets.star_2} alt="" className='star-img' /></Link></button>
                </div>
                <div className='star star-3'>
                    <button class="image-button"><Link to="/define"><img src={assets.star_3} alt="" className='star-img' /></Link></button>
                </div>
                <div className='star star-4'>
                    <button class="image-button"><Link to="/ideate"> <img src={assets.star_4} alt="" className='star-img' /> </Link></button>
                </div>
                <div className='star star-5'>
                    <button class="image-button"><Link to="/develop"><img src={assets.star_5} alt="" className='star-img' /></Link></button>
                </div>
                <div className='star star-6'>
                    <button class="image-button"><Link to="/test"><img src={assets.star_6} alt="" className='star-img' /></Link></button>
                </div>
                <div className='star star-7'>
                    <button class="image-button"><Link to="/reflect"><img src={assets.star_7} alt="" className='star-img' /></Link></button>
                </div>


            </div>
        </div>
    )
}


export default Phase