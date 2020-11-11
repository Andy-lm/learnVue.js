const localStorageName = 'recordList';
const recordListModel = {
    clone(data:RecordItem[] | RecordItem) {
        return JSON.parse(JSON.stringify(data));
    },
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];
    },
    save(data:RecordItem[]) {
        window.localStorage.setItem(localStorageName,JSON.stringify(data));
    }
}

// export default model
export default recordListModel