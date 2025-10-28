import React from 'react';
import styles from './Card.module.css';
import Avtar from '../assets/avtart.png'
import Ai from '../assets/logo.png';

const ChatCard = ({ chat, time, user }) => {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <img src={user?Avtar:Ai} alt="user avatar" />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.name}>{user?"You":"Soul AI"}</span>
        </div>
        <p className={styles.message}>{chat}</p>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
};

export default ChatCard;
