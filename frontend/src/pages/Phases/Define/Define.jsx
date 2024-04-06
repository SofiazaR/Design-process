
import React, { useContext } from 'react'
import { assets } from '../../../assets/assets'
import { Context } from '../../../context/Context'
import './Define.css'

const Define = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="cards">
                            <div className="card" onClick={() => onSent("Взгляд под углом 360 градусов")}>
                                <p>Взгляд под углом 360 градусов</p>
                            </div>
                            <div className="card" onClick={() => onSent("Инструменты 9 окон и карта-ромашка")}>
                                <p>Инструменты 9 окон и карта-ромашка</p>
                            </div>
                            <div className="card" onClick={() => onSent("Формулировка точки зрения, например вопрос “КАК МЫ МОЖЕМ...”")}>
                                <p>Формулировка точки зрения, например вопрос “КАК МЫ МОЖЕМ...”</p>
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

export default Define

