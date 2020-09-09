import clone from '@/components/lib/Clone'

const LocalStorageKeyName = 'recordList'


const model = {
    data: [] as RecordItem[],
    fetch() {
        this.data = JSON.parse(
            window.localStorage.getItem(LocalStorageKeyName) || "[]"
        )
        return this.data
    },
    save() {
        window.localStorage.setItem("recordList", JSON.stringify(this.data))
    },
    create(record: RecordItem) {
        const deepClone = clone(record);
        //深拷贝
        deepClone.createAt = new Date();
        this.data.push(deepClone);
    }
}
export default model