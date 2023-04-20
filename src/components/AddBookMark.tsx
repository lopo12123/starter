import {useState} from "react";
import {toast} from "sonner";

const AddBookMark = () => {
    const [url, setUrl] = useState('')
    const addBookmark = () => {
        toast.success('hello')
    }

    return (
        <div>
            <input
                style={{width: 260}}
                type="text" value={url}
                placeholder="请输入"
                onChange={e => setUrl(e.target.value)}/>
            <button style={{marginLeft: 20}}
                    onClick={addBookmark}>
                添加
            </button>
        </div>
    )
}

export {
    AddBookMark
}