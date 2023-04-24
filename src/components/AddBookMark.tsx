import { useState } from "react";
import { toast } from "sonner";
import { StorageImpl, SyncMap } from "../scripts/storage";
import { useSetRecoilState } from "recoil";

const AddBookMark = () => {
    const setSyncMap = useSetRecoilState(SyncMap)
    const [ url, setUrl ] = useState('')
    const addBookmark = () => {
        if(!url) toast.error('请输入内容')
        else {
            const newItem: [ string, string ] = [ url, new Date().toLocaleString() ]
            const newItemKey = StorageImpl.addSingle(newItem)
            setUrl('')
            setSyncMap(prev => {
                const m = new Map(prev)
                m.set(newItemKey, newItem)
                return m
            })
            toast.success('已添加')
        }
    }

    return (
        <div>
            <input
                style={ { width: 260 } }
                type="text" value={ url }
                placeholder="请输入"
                onChange={ e => setUrl(e.target.value) }/>
            <button style={ { marginLeft: 20 } }
                    onClick={ addBookmark }>
                添加
            </button>
        </div>
    )
}

export {
    AddBookMark
}
