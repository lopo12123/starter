import {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <p className="read-the-docs">
                123
            </p>
            <div className="divider"/>
            <span className="logo">123</span>
            Click on the Vite and React logos to learn more
            <button>aaa</button>

            <code>
                {
                    `
                  code {
              font-size: 12px;
              font-family: inherit;
              background-color: rgba(255, 255, 255, 0.1);
              padding: 2px 4px;
              border-radius: 2px;
          }
          `
                }
            </code>
        </>
    )
}

export default App
