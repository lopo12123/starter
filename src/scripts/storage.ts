import {v4} from "uuid";

export type BookmarkItem = [link: string, date: string]

abstract class StorageImpl {
    static #key: string = '@bookmark'

    static getAll(): Map<string, BookmarkItem> {
        const serialized = localStorage.getItem(StorageImpl.#key);

        if (!serialized) return new Map()

        try {
            const deserialized = JSON.parse(serialized) as [string, [string, string]][]
            return new Map(deserialized)
        } catch (err) {
            console.log('[deserialize]', err)
            return new Map()
        }
    }

    static setAll(items: Map<string, BookmarkItem>) {
        localStorage.setItem(StorageImpl.#key, JSON.stringify([...items]))
    }

    static clearAll() {
        localStorage.removeItem(StorageImpl.#key)
    }

    static addSingle(item: BookmarkItem): string {
        const id = v4()
        const m = StorageImpl.getAll()
        m.set(id, item)
        StorageImpl.setAll(m)
        return id
    }

    static removeSingle(id: string) {
        const m = StorageImpl.getAll()
        m.delete(id)
        StorageImpl.setAll(m)
    }
}

export {
    StorageImpl
}