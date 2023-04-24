import { StorageImpl, SyncList, SyncMap } from "../scripts/storage";
import Cat from "../assets/cat.gif";
import { BookmarkCard } from "./BookmarkCard";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const BookmarkList = () => {
    const list = useRecoilValue(SyncList)
    const setSyncMap = useSetRecoilState(SyncMap)

    const handleRemove = (id: string) => {
        StorageImpl.removeSingle(id)
        setSyncMap(prev => {
            prev.delete(id)
            return { ...prev }
        })
    }

    return (
        <div className={ `bookmark-list ${ list.length == 0 ? 'empty' : 'not-empty' }` }>
            {
                list.length == 0
                    ? <img src={ Cat } alt="" style={ { height: '80%', opacity: 0.7 } }/>
                    : list.map(
                        (item, idx) => <BookmarkCard key={ idx } item={ item }/>
                    )
            }
        </div>
    )
}
