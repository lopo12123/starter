import { BookmarkItem } from "../scripts/storage";

export type BookmarkCardProps = {
    item: BookmarkItem
}

export const BookmarkCard = (props: BookmarkCardProps) => {
    const [ link, date ] = props.item

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
        </div>
    )
}
