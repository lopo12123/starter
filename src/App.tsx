import './App.scss'
import {Toaster} from "sonner";

import {AddBookMark} from "./components/AddBookMark";
import {ClockBlock} from "./components/ClockBlock";
import {BookmarkList} from "./components/BookmarkList";
import {RecoilRoot} from "recoil";

function App() {
    return (
        <RecoilRoot>
            <Toaster/>

            <ClockBlock/>

            <div className="divider"/>

            <BookmarkList/>

            <div className="divider"/>

            <AddBookMark/>
        </RecoilRoot>
    )
}

export default App
