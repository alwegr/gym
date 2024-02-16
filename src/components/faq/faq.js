import React, { useState } from 'react'
import { FaqItem } from './faqItem'
import style from './faq.module.css'


export const Faq = ({dataFaq}) => {
  const [openId, setId] = useState(null)

  return (
    <>
      <section id='faq'>
        <ul className={style.faq}>
          {dataFaq?.map((dataFaq, id) => {
            return(
              <FaqItem
                onClick={() => (id === openId ? setId(null) : setId(id))}
                dataFaq={dataFaq}
                isOpen={id === openId}
                key={id}/>
            )
          })}
        </ul>
      </section>
    </>
  )
}
