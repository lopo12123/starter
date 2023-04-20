import {useState} from 'react'
import './App.css'

import {AddBookMark} from "./components/AddBookMark";
import {ClockBlock} from "./components/ClockBlock";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <ClockBlock/>

            <div className="divider"/>

            <div style={{flex: 1, margin: 20}}>
                list
            </div>

            <div className="divider"/>

            <AddBookMark/>
        </>
    )
}

export default App
