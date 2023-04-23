import './App.css'
import {useState} from 'react'
import {Toaster} from "sonner";

import {AddBookMark} from "./components/AddBookMark";
import {ClockBlock} from "./components/ClockBlock";
import {BookmarkList} from "./components/BookmarkList";
import {RecoilRoot} from "recoil";

function App() {
    const [count, setCount] = useState(0)

    return (
        <RecoilRoot>
            <Toaster richColors/>

            <ClockBlock/>

            <div className="divider"/>

            <BookmarkList/>

            <div className="divider"/>

            <AddBookMark/>
        </RecoilRoot>
    )
}

export default App
