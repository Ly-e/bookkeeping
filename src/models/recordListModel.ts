const localStorageKeyName = 'recordList';
const recordLisModel = {
    data: [] as RecordItem[],
    fetch() {
        return JSON.parse(
            window.localStorage.getItem(localStorageKeyName) || "[]"
        ) as RecordItem[];
    },
    save(data: RecordItem[]) {
        console.log(data)
        window.localStorage.setItem(
            localStorageKeyName,
            JSON.stringify(data)
        );
    },
    clone(data: RecordItem | RecordItem[]) {
        return JSON.parse(JSON.stringify(data));
    }
};
export default recordLisModel;