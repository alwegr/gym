import React from 'react'
import style from './contact-us.module.css'



function Contact()  {
    return (
      <>
        <section>
            <div className={style.form_box}>
                <div>
                    <p>
                      <label htmlFor='firstname'>Ваше имя</label><br />
                      <input
                        type="text"
                        name='firstname'
                        placeholder="Ромашов Борис"
                      />
                    </p>
                    <p>
                      <label htmlFor='email'>Электронная почта</label><br />
                      <input
                        type="email"
                        name='email'
                        placeholder="yourmail@yandex.ru"
                      />
                    </p>
                    <p>
                      <label htmlFor='phone'>Номер телефона</label><br />
                      <input
                        type="text"
                        name='phone'
                        placeholder="+7 (918) 540 75 51"
                      />
                    </p>
                    <div className={style.checkbox}>
                      <label htmlFor='agreement'>
                        <input
                          type="checkbox"
                          name='agreement'
                        />
                        Я принимаю соглашение сайта об обработке <a href='https://store.bezlimit.ru/files/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5%20%D1%81%20%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf?ysclid=lri1x4jcjy502783038'>персональных данных</a>.
                      </label>
                    </div>
                    <button className={style.contatct_button}
                      type="submit">Отправить</button>

                </div>

            </div>
        </section>
      </>
    )
  
}

export default Contact