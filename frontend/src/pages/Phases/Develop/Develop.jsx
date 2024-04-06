
import React, { useContext } from 'react'
import { assets } from '../../../assets/assets'
import { Context } from '../../../context/Context'
import './Develop.css'

const Develop = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="cards">
                            <div className="card" onClick={() => onSent("Разработка прототипов")}>
                                <p>Разработка прототипов</p>
                            </div>
                            <div className="card" onClick={() => onSent("Различные виды прототипов")}>
                                <p>Различные виды прототипов</p>
                            </div>
                            <div className="card" onClick={() => onSent("Принцип коробки и полок")}>
                                <p>Принцип коробки и полок</p>
                            </div>
                            <div className="card" onClick={() => onSent("Семинар по созданию прототипов")}>
                                <p>Семинар по созданию прототипов</p>
                            </div>
                        </div>
                    </>
                    : <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Develop

