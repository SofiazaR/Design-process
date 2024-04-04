
import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import "./Favorite.css"

const Chat = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Привет</span></p>
                            <p>Как я могу помочь тебе сегодня</p>
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


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Введите запрос тут' />
                        <div>
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Информация может быть не точной, в том числе о людях, поэтому перепроверяйте ответы.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat

