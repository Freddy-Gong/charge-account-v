const LocalStorageKeyName = 'tagList'
type TagModel = {
    data: string[];
    fetch: () => string[];
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
        if (this.data.indexOf(name) >= 0) {
            throw new Error('duplicated')
        }
        this.data.push(name)
        this.save()
        return true
    }
}
export default tagModel