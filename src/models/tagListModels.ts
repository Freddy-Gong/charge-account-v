import createID from '@/components/lib/idcreater'

const LocalStorageKeyName = 'tagList'

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
        const id = createID()
        this.data.push({ id: id.toString(), name: name })
        this.save()
        return true
    },
    update(id: string, name: string) {
        const idList = this.data.map(item => item.id)
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name)
            if (names.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const tag = this.data.filter(item => item.id === id)[0]
                tag.name = name
                return 'success'

            }
        } else {
            return 'not found'
        }
    },
    delete(id: string) {
        let index = -1
        for (let i = 0; this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break
            }
        }
        this.data.splice(index, 1)
        this.save()
        return true
    }
}
export default tagModel