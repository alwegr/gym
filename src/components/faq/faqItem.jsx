import React, { useRef } from 'react'; 
import { ReactComponent as CrossOpen } from './images-faq/crossOpen.svg'
import style from './faq.module.css'

export const FaqItem = ({dataFaq, onClick, isOpen}) => {
    const itemRef = useRef(null) 

    return (
        <>
            <div className={style.wrapper}>
                <li className={style.faq_item}>
                    <button className={style.header} onClick={() => onClick()}>
                        <CrossOpen className={`faq_arrow ${isOpen ? "active" : ""}`}/>
                        <div>
                            <p>{dataFaq.question}</p>
                        </div>
                        <div className={style.accordion_collapse} style={isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }}>
                            <div className={style.accordion_body} ref={itemRef}>
                                {dataFaq.answer}
                            </div>
                        </div>
                    </button>
                </li>
            </div>
        </>
    )
}
