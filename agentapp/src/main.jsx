import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css'

import { AgentApp } from './components/AgentApp';
// import { AccordionApp } from './components/AccordionApp';
// import { CardsApp } from './components/CardsApp';

// 1. Import `createTheme`
import { NextUIProvider } from "@nextui-org/react"




ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <NextUIProvider >
    {/* theme={theme} */}
      <AgentApp />
  </NextUIProvider>   
  // {/* // </React.StrictMode> */}
)
