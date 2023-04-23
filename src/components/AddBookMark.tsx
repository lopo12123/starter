import {useState} from "react";
import {toast} from "sonner";
import {StorageImpl, SyncMap} from "../scripts/storage";
import {useSetRecoilState} from "recoil";

const AddBookMark = () => {
    const setSyncList = useSetRecoilState(SyncMap)
    const [url, setUrl] = useState('')
    const addBookmark = () => {
        if (!url) toast.error('请输入内容')
        else {
            const newItem = [url, new Date().toLocaleString()]
            const newItemKey = StorageImpl.addSingle(newItem)
            setUrl('')
            setSyncList(prev => ({...prev, [newItemKey]: newItem}))
            toast.success('已添加')
        }
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