const localStorageKeyName = 'recordList';
const model = {
    fetch() {
        return JSON.parse(
            window.localStorage.getItem("recordsList") || "[]"
        ) as RecordItem[];
    },
    save(data: RecordItem[]) {
        window.localStorage.setItem(
            "recordsList",
            JSON.stringify(data)
        );
    },
    clone(data: RecordItem | RecordItem[]) {
        return JSON.parse(JSON.stringify(data));
    }
};
export default model;