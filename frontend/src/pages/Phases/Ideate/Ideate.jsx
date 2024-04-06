
import React, { useContext } from 'react'
import { assets } from '../../../assets/assets'
import { Context } from '../../../context/Context'
import './Ideate.css'

const Ideate = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="cards">
                            <div className="card" onClick={() => onSent("Мозговой штурм")}>
                                <p>Мозговой штурм</p>
                            </div>
                            <div className="card" onClick={() => onSent("Глубина идей")}>
                                <p>Глубина идей</p>
                            </div>
                            <div className="card" onClick={() => onSent("Техники творческого поиска")}>
                                <p>Техники творческого поиска</p>
                            </div>
                            <div className="card" onClick={() => onSent("Методика Scamper")}>
                                <p>Методика Scamper</p>
                            </div>
                            <div className="card" onClick={() => onSent("Структурирование, группировка и документирование идей")}>
                                <p>Структурирование, группировка и документирование идей</p>
                            </div>
                            <div className="card" onClick={() => onSent("Информационной лист идеи")}>
                                <p>Информационной лист идеи</p>
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

export default Ideate

