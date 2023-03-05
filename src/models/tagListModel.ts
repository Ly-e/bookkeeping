const localStorageKeyName = 'tagList';
type TagListModel = {
    data: Array<any>
    fetch: () => string[]
    create: (name: string, icon: string) => TagItem
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
    create(name: string, icon: string) {
        const x: TagItem = {
            name: name,
            icon: icon,
        }
        this.data.push(x);
        this.save();
        return x;
    }
};
export default tagListModel;