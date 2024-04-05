
import React, { useContext } from 'react'
import { assets } from '../../../assets/assets'
import { Context } from '../../../context/Context'
import './Reflect.css'

const Reflect = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="cards">
                            <div className="card" onClick={() => onSent("Создай портрет пользователя")}>
                                <p>Создай портрет пользователя</p>
                            </div>
                            <div className="card" onClick={() => onSent("Построй медель крючка")}>
                                <p>Построй медель крючка</p>
                            </div>
                            <div className="card" onClick={() => onSent("Распиши по методологии JTBD")}>
                                <p>Распиши по методологии JTBD</p>
                            </div>
                            <div className="card" onClick={() => onSent("Смоделируй будущее пользователя")}>
                                <p>Смоделируй будущее пользователя</p>
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

export default Reflect

