type RecordItem = {
    tags:Tag[],
    notes:string,
    type:string,
    amount:number, // 可以是数据类型
    createdAt?:string // 可以是类 | 构造函数
}
type RootState = {
    recordList:RecordItem[],
    tagList:Tag[],
    currentTag?: Tag,
    createRecordError: Error | null,
    creatTagError:Error | null,
}
type Tag = {
    id: string,
    name:string
}
type tagListModel = {
    data: Tag[],
    fetch: () => Tag[],
    create: (name: string) => 'success' | 'duplicated', // success表示成功 duplicated表示name重复
    save: () => void,
    update:(id:string,name:string) => 'success' | 'not found' | 'duplicated',
    remove:(id:string) => boolean
}

interface Window {
    store: {
        tagList: Tag[],
        createTag: (name: string) => void,
        removeTag: (id: string) => boolean,
        updateTag: tagListModel['update'],
        fingTag: (id: string) => Tag | undefined,
        recordList: RecordItem[],
        createRecord:(record:RecordItem) => void
    }
}