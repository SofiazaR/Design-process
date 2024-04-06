
import React, { useContext } from 'react'
import { assets } from '../../../assets/assets'
import { Context } from '../../../context/Context'
import './Test.css'

const Test = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="cards">
                            <div className="card" onClick={() => onSent("Процедура тестирования")}>
                                <p>Процедура тестирования</p>
                            </div>
                            <div className="card" onClick={() => onSent("Таблица обратной связи")}>
                                <p>Таблица обратной связи</p>
                            </div>
                            <div className="card" onClick={() => onSent("A/B-тестирование")}>
                                <p>A/B-тестирование</p>
                            </div>
                            <div className="card" onClick={() => onSent("Таблица эксперимента")}>
                                <p>Таблица эксперимента</p>
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

export default Test

