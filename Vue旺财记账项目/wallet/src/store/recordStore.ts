import clone from '../lib/clone';
const localStorageName = 'recordList'; 
let data:RecordItem[] | undefined = undefined;  
const recordStore = { 
    // record store
    recordList: data,
    fetchRecords() { 
        data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];
        return data; 
    },
    saveRecords() {
        window.localStorage.setItem(localStorageName,JSON.stringify(data));
    },
    createRecord: (record: RecordItem) => {
        let cloneRecord:RecordItem = clone(record);
        cloneRecord.createdAt = new Date();
        data && data.push(cloneRecord);
        recordStore.saveRecords();
    },
}
recordStore.fetchRecords();
export default recordStore