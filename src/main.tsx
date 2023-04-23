import './font/font.scss'
import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// document.oncontextmenu = (e) => {
//     e.preventDefault();
// }
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App/>)
