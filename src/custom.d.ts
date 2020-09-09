type RecordItem = {
    tags: string[];
    notes: string;
    types: "-" | "+";
    amount: number;
    createAt?: Date | undefined; //类型这里除了可以写一个类型，还可以写一个类（构造函数）
};
type Tag = {
    id: string;
    name: string;
}

type TagModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => boolean;
    save: () => void;
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    delete: (id: string) => boolean;
}
interface Window {
    tagList: Tag[];
    createTag: (name: string) => void;
    removeTag: (id: string) => boolean;
    updateTag: TagModel['update'];
    find: (id: name) => Tag | undefined;
}
