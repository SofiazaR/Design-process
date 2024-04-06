import React, { useContext } from 'react'
import { assets } from '../../../assets/assets'
import { Context } from '../../../context/Context'
import "./Observe.css"

const Observe = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="cards">
                            <div className="card" onClick={() => onSent("Карта эмпатии")}>
                                <p>Карта эмпатии</p>
                            </div>
                            <div className="card" onClick={() => onSent("Метод AEIOU Что? Как? Почему?")}>
                                <p>Метод AEIOU Что? Как? Почему?</p>
                            </div>
                            <div className="card" onClick={() => onSent("Проверка важных допущений")}>
                                <p>Проверка важных допущений</p>
                            </div>
                            <div className="card" onClick={() => onSent("Обсуждение пользовательских нужд, в том числе при помощи открытых вопросовя")}>
                                <p>Обсуждение пользовательских нужд, в том числе при помощи открытых вопросов</p>
                            </div>
                            <div className="card" onClick={() => onSent("Ведущий пользователь")}>
                                <p>Ведущий пользователь</p>
                            </div>
                            <div className="card" onClick={() => onSent("Уточняющие вопросы")}>
                                <p>Уточняющие вопросы</p>
                            </div>
                            <div className="card" onClick={() => onSent("Будьте внимательным")}>
                                <p>Будьте внимательным</p>
                            </div>
                            <div className="card" onClick={() => onSent("Используйте жезл оратора")}>
                                <p>Используйте жезл оратора</p>
                            </div>
                            <div className="card" onClick={() => onSent("Используйте эмпатию в UX-дизайне")}>
                                <p>Используйте эмпатию в UX-дизайне</p>
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

export default Observe

