import model from "@/models/model";
import tagModel from '@/models/tagListModels';

const store = {
    //record store
    recordList: model.fetch(),
    createRecord: (record: RecordItem) => model.create(record),
    //1全局变量太多了
    //2严重依赖window
    //tag store
    tagList: tagModel.fetch(),
    find(id: string) {
        return this.tagList.filter((t) => t.id === id)[0]
    },
    createTag: (name: string) => {
        if (name) {
            try {
                tagModel.create(name);
                window.alert("chenggonog");
            } catch (error) {
                if (error.message === "duplicated") {
                    window.alert("标签重复");
                }
            }
        }
    },
    removeTag: (id: string) => {
        if (tagModel.delete(id)) {
            return true
        } else {
            return false
        }
    },
    updateTag: (id: string, name: string) => {
        return tagModel.update(id, name);

    }
}
export default store