import clone from '../lib/clone';
const localStorageName = 'recordList';
const recordListModel = {
    data:[] as RecordItem[], 
    create(record:RecordItem) {
        let cloneRecord:RecordItem = clone(record);
        cloneRecord.createdAt = new Date();
        this.data.push(cloneRecord);
    },
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];
        return this.data; 
    },
    save() {
        window.localStorage.setItem(localStorageName,JSON.stringify(this.data));
    }
}

// export default model
export default recordListModel