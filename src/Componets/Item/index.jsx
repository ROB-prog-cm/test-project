import React from 'react';
import styles from './styles.module.scss'
import {Route} from "react-router-dom";

const Item = ({items}) => {

  function getDate(meta) {
    const currentDate = new Date(meta);
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const currentHours = currentDate.getHours();
    const currentMinutes = "0" + currentDate.getMinutes();
    return currentDay + "." + currentMonth + "." + currentYear + ' ' + currentHours + ':' + currentMinutes.substr(-2)
  }

  return (
    <>
      {
        items.map(item => (
          <div className={styles.container}>
            <div>
              <p className={styles.itemMain}>N {item.id} </p>
              <p>{getDate(item.created_date)}</p>
            </div>
            <div className={styles.itemContainer}>
              <p className={styles.itemMain}>{item.order_type.name}</p>
              <p>{item.created_user.name}</p>
            </div>
            <div className={styles.itemContainer}>
              <p className={styles.itemMain}>{item.account.name.slice(0, 16) + '...'}</p>
              <p>{item.terminal.name.slice(0, 6) + '...'}</p>
            </div>
            <div className={styles.itemContainer}>
              {item.status === 'new' ?
                <p className={styles.colorRed}>Новое </p> :
                item.status === 'completed' ? <p className={styles.colorBlue}> Выполняется </p> :
                  item.status === 'assigned_to' ? <p className={styles.colorYellow}> Назначенно </p> :
                    <p className={styles.colorBlack}> Отменено </p>}
            </div>
          </div>
        ))
      }
    </>
  );
};

export default Item;
