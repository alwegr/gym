import React from 'react'
import style from './schedule.css'

const Schedule = () => {
  return (
    <>
      <section id='schedule'>
        <div className={style.header_schedule}>
          <h2>ВРЕМЯ ПОСЕЩЕНИЯ</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>ПН</th>
              <th>ВТ</th>
              <th>СР</th>
              <th>ЧТ</th>
              <th>ПТ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>УТРО</th>
              <th>8:00 - 12:00</th>
              <th>-</th>
              <th>8:00 - 12:00</th>
              <th>-</th>
              <th>8:00 - 12:00</th>
            </tr>
            <tr>
              <th>ВЕЧЕР</th>
              <th>8:00 - 12:00</th>
              <th>-</th>
              <th>8:00 - 12:00</th>
              <th>-</th>
              <th>8:00 - 12:00</th>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}
export default Schedule
