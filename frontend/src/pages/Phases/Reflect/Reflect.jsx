
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
                            <div className="card" onClick={() => onSent("Распиши по 4 категориям: что мы продолжим делать, что мы прекратим делать, что мы хотим попробовать, что не относиться к делу")}>
                                <p>Использовать доску ретроспективного анализа</p>
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

