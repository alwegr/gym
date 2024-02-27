import React from 'react'
import style  from './contact-us.module.css'
import map from './images-contact/map.jpg'

export const Contact = () => {
  return (
    <>
      <section id='contact'>
          {/* правая сторона форма */}
          <div className={style.wrapper_contact}>
              <div className={style.form_box}>
                  <p>
                    <input
                      type="text"
                      name='firstname'
                      placeholder="Имя"
                    />
                  </p>
                  <p>
                    <input
                      type="tel"
                      name='telephone'
                      placeholder="+7 (918) 540 75 51"
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      name='message'
                      placeholder="Сообщение"
                    />
                  </p>
                  <div className={style.checkbox}>
                    <label htmlFor='agreement'>
                      <input
                        type="checkbox"
                        name='agreement'
                      />
                      Соглашаюсь на <a href='https://store.bezlimit.ru/files/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5%20%D1%81%20%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf?ysclid=lri1x4jcjy502783038'>обработку персональных данных</a>.
                    </label>
                  </div>
                  <button className={style.contact_button}
                    type="submit">Отправить</button>

              </div>

               {/* левая сторона карта */}
              <div>
                <img src={map} alt='карта'/>
              </div>
          </div>
         
      </section>
    </>
  )
}
