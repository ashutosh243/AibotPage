import React, { useState } from 'react';
import style from './bot.module.css';
import { FileChartColumnIncreasing } from 'lucide-react'
import logo from '../assets/logo.png';
import Card from '../component/Card';
import sampleData from '../sampleData.json';
import Question from '../component/Question';
import { Link } from 'react-router-dom';



const q = ["Hi,what is weather", "Hi,what is the temperature", "Hi,what is my location", "Hi,how are you"];
function getBotResponse(data) {

    const input = data.toLowerCase().trim();

    const match = sampleData.find((item) => { return input.includes(item.question.toLowerCase().trim()) }
    );

    if (match) {
        return match.response;
    }

    return "Sorry, Did not understand your query!";
}
function Bot() {

    const [searchText, setSearchText] = useState('');
    const [chats, setChats] = useState([]);
    const handleChange = (e) => {
        setSearchText(e.target.value);
    }
    const handleClick = (e) => {
        e.preventDefault();

        const userMessage = {
            chat: searchText,
            time: new Date().toLocaleTimeString(),
            user: true
        };

        const botMessage = {
            chat: getBotResponse(searchText),
            time: new Date().toLocaleTimeString(),
            user: false
        };

        setChats((prev) => [...prev, userMessage, botMessage]);
        setSearchText("");
    };

    const handleNext = () => {
        localStorage.setItem('chats', JSON.stringify(chats));
        setChats([]);
    }
    return <>
        <div className={style.container}>
            <div className={style.sidebar}>
                <div className={style.newchats}>
                    <a href='/'>
                        <button onClick={handleNext} className={style.nextButton}>
                            New Chat
                            <FileChartColumnIncreasing />
                        </button>
                    </a>
                </div>
                <div className={style.pastConversation} >
                    <a href='/history'>
                        <button type='button' className={style.pastButton}>Past Conversations</button>
                    </a>
                </div>
            </div>
            <div className={style.main}>
                <header className={style.headings}>
                    <h1>Bot AI</h1>
                </header>
                <div className={style.chatsContainer}>
                    {
                        chats.length === 0 && <div className={style.emptyContainer}><h1>How Can I Help You Today?</h1>
                            <img src={logo} alt="" /></div>
                    }
                    {
                        chats?.length !== 0 && chats.map((chat) => { return <Card chat={chat.chat} time={chat.time} user={chat.user}></Card> })
                    }
                    <div className={style.question}>
                        {

                            chats.length == 0 && (q.map((qu) => { return <Question question={qu}></Question> }))
                        }
                    </div>
                </div>
                <div className={style.chatsControl}>
                    <form onSubmit={handleClick}>
                        <input value={searchText} onChange={handleChange} type="text" placeholder='Message Bot AI...' />
                        <button type='submit' >Ask</button>
                        <button>Save</button>
                    </form>
                </div>

            </div>
        </div>
    </>
}

export default Bot