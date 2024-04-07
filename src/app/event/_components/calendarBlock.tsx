"use client";

import { useState } from "react";
import { range } from "@/utils/tools";
import { eventList } from "@/consts";
import styles from "@app/event/_components/calendarBlock.module.scss";

const CalendarCell = (props: { month: number; day: number }) => {
  const maxDay = props.month === 4 ? 30 : 31;
  const event = eventList.find(
    (event) => event.date.getMonth() + 1 === props.month && event.date.getDate() === props.day
  );

  return (
    <td>
      {1 <= props.day && props.day <= maxDay ? (
        <>
          <p>{props.day}</p>
          <ul>
            {event?.events.map((welcomeEvent) => (
              <li>{welcomeEvent}</li>
            ))}
          </ul>
        </>
      ) : null}
    </td>
  );
};

const CalenderBlock = () => {
  const [isApril, setIsApril] = useState(true);

  return (
    <div className={styles.calendarBlock}>
      <h2>新歓カレンダー</h2>
      <div className={styles.month}>
        <button className={isApril ? styles.selectedMonth : styles.unselectedMonth} onClick={() => setIsApril(true)}>
          4月
        </button>
        <button className={isApril ? styles.unselectedMonth : styles.selectedMonth} onClick={() => setIsApril(false)}>
          5月
        </button>
      </div>
      <table>
        <tbody>
          <tr>
            <th>日</th>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
            <th>土</th>
          </tr>
          {isApril ? (
            <>
              <tr>
                {range(0, 7).map((day) => (
                  <CalendarCell month={4} day={day} />
                ))}
              </tr>
              <tr>
                {range(7, 14).map((day) => (
                  <CalendarCell month={4} day={day} />
                ))}
              </tr>
              <tr>
                {range(14, 21).map((day) => (
                  <CalendarCell month={4} day={day} />
                ))}
              </tr>
              <tr>
                {range(21, 28).map((day) => (
                  <CalendarCell month={4} day={day} />
                ))}
              </tr>
              <tr>
                {range(28, 35).map((day) => (
                  <CalendarCell month={4} day={day} />
                ))}
              </tr>
            </>
          ) : (
            <>
              <tr>
                {range(-2, 5).map((day) => (
                  <CalendarCell month={5} day={day} />
                ))}
              </tr>
              <tr>
                {range(5, 12).map((day) => (
                  <CalendarCell month={5} day={day} />
                ))}
              </tr>
              <tr>
                {range(12, 19).map((day) => (
                  <CalendarCell month={5} day={day} />
                ))}
              </tr>
              <tr>
                {range(19, 26).map((day) => (
                  <CalendarCell month={5} day={day} />
                ))}
              </tr>
              <tr>
                {range(26, 33).map((day) => (
                  <CalendarCell month={5} day={day} />
                ))}
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CalenderBlock;
