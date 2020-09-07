type RecordItem = {
    tags: string[];
    notes: string;
    types: "-" | "+";
    amount: number;
    createAt?: Date | undefined; //类型这里除了可以写一个类型，还可以写一个类（构造函数）
};