type RecordItem = {
    tags: string[];
    notes: string;
    types: "-" | "+";
    amount: number;
    createAt?: string | undefined; //类型这里除了可以写一个类型，还可以写一个类（构造函数）
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

