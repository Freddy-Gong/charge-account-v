const LocalStorageKeyName = 'tagList'
type Tag = {
    id: string;
    name: string;
}

type TagModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => boolean;
    save: () => void;
}
const tagModel: TagModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(LocalStorageKeyName) || '[]')
        return this.data
    },
    save() {
        window.localStorage.setItem(LocalStorageKeyName, JSON.stringify(this.data))
    },
    create(name) {
        const names = this.data.map(item => item.name)
        if (names.indexOf(name) >= 0) {
            throw new Error('duplicated')
        }
        this.data.push({ id: name, name: name })
        this.save()
        return true
    }
}
export default tagModel