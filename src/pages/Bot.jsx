import React, { useState } from 'react';
import style from './bot.module.css';
import { FileChartColumnIncreasing } from 'lucide-react'
import logo from '../assets/logo.png';
import Card from '../component/Card';
import sampleData from '../sampleData.json';
import Question from '../component/Question';



const q=["Hi,what is weather","Hi,what is the temperature","Hi,what is my location","Hi,how are you"];
function getBotResponse(data)
{

      const input=data.toLowerCase().trim();
      
      const match=sampleData.find((item)=>
        {return input.includes(item.question.toLowerCase().trim())}
      );

      if(match){
        return match.response;
      }


      return "Sorry, Did not understand your query!";
}
function Bot() {

    const [searchText, setSearchText] = useState('');
    const [chats,setChats]=useState([]);
    const handleChange = (e) => {   
        setSearchText(e.target.value);
    }
    const handleClick=()=>{

        setChats((prev)=>{ return [...prev,{chat:searchText,time:new Date().toLocaleTimeString(),user:true}] });
        setChats((prev)=>{ return [...prev,{chat:getBotResponse(searchText),time:new Date().toLocaleTimeString(),user:false}] });
        setSearchText("");    
    }

    return <>
        <div className={style.container}>
            <div className={style.sidebar}>
                <div className={style.newchats}>
                    <h3>New Chat </h3>
                    <button><FileChartColumnIncreasing /></button>
                </div>
            </div>
            <div className={style.main}>
                <div className={style.headings}>
                    <h3>Bot AI</h3>
                </div>
                <div className={style.chatsContainer}>
                    {
                       chats.length===0&&<div className={style.emptyContainer}><h1>How Can I Help You Today?</h1>
                       <img src={logo} alt="" /></div> 
                    }
                    {
                        chats?.length!==0&&chats.map((chat)=>{return <Card chat={chat.chat} time={chat.time} user={chat.user}></Card>})
                    } 
                    <div className={style.question}>
                    {
                        
                        chats.length==0&&(q.map((qu)=>{return <Question question={qu}></Question>}))
                    }
                    </div>
                </div>
                <div className={style.chatsControl}>
                    <input value={searchText} onChange={handleChange} type="text" placeholder='Message Bot AI...' />
                    <button type='submit' onClick={handleClick}>Ask</button>
                    <button>Save</button>
                </div>

            </div>
        </div>
    </>
}

export default Bot