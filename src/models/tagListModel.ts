const localStorageKeyName = 'tagList';
type TagListModel = {
    data: Array<any>
    fetch: () => string[]
    create: (tagData: []) => []
    save: () => void
}
const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(
            window.localStorage.getItem(localStorageKeyName) || "[]");
        return this.data
            ;
    },
    save() {
        window.localStorage.setItem(
            localStorageKeyName,
            JSON.stringify(this.data)
        );
    },
    create(tagData: []) {
        this.data.push(tagData);
        this.save();
        return tagData;
    }
};
export default tagListModel;