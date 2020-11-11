type RecordItem = {
    tags:string[],
    notes:string,
    type:string,
    amount:number, // 可以是数据类型
    createdAt?:Date // 可以是类 | 构造函数
}