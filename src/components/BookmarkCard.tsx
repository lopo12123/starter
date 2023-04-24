import { BookmarkItem } from "../scripts/storage";
import IconClose from "../assets/close.png";

export type BookmarkCardProps = {
    item: BookmarkItem
    onRemove: (id: string) => void
}

export const BookmarkCard = (props: BookmarkCardProps) => {
    const [ id, link, date ] = props.item

    return (
        <div className="bookmark-card"
             onClick={ () => {
                 if(link.startsWith('http')) {
                     window.open(link)
                 }
             } }>
            <div className="link" title={ link }>
                <b>内容:</b> { link }
            </div>
            <div className="date">
                <b>创建:</b> { date }
            </div>
            <img className="close" src={ IconClose } alt=""
                 onClick={ e => props.onRemove(id) }/>
        </div>
    )
}
