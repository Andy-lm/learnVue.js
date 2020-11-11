const localStorageName = 'tagList';
type Tag = {
    id: string,
    name:string
}
type tagListModel = {
    data: Tag[],
    fetch: () => Tag[],
    create: (name: string) => 'success' | 'duplicated', // success表示成功 duplicated表示name重复
    save:() => void
}
const tagListModel: tagListModel = {
    data:[],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]')
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageName,JSON.stringify(this.data));
    },
    create(name: string) {
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) {return 'duplicated'} ;
        this.data.push({id:name,name:name});
        this.save();
        return 'success';
    }
}

// export default model
export default tagListModel