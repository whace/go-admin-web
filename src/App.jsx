
import { useScrollTrigger,Slide } from '@mui/material';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '/@/routers';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
