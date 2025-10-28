import React, { useState } from 'react';
import style from './pastConversation.module.css';
import Card from './Card';

const PastConversation=()=> {
  
    const [data,setData]=useState(JSON.parse(localStorage.getItem('chats')));
    console.log(data);
    return <>
        <div className={style.container}>
            <div className={style.headings}>Past Conversations</div>
            <div className={style.conversation}>
                {
                   data?.length !== 0 && data?.map((chat) => { return <Card chat={chat.chat} time={chat.time} user={chat.user}></Card> })
                }
            </div>

        </div>
    </>
}

export default PastConversation;