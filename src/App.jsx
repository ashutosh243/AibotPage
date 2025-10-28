import React from 'react';
import Bot from './pages/Bot';
import './App.css'
import PastConversation from './component/PastConversation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const App = () => {
  return (<>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Bot></Bot>}></Route>
        <Route path='/history' element={<PastConversation/>}></Route>
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;