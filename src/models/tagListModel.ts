const localStorageKeyName = 'tagList';
type TagListModel = {
    data: TagItem[]
    fetch: () => TagItem[]
    create: (name: string, icon: string) => 'success' | 'duplicated'
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
            id: name,
            name: name,
            icon: icon,
        }
        const nameInData = this.data.map(value => value.name);
        const nameInDataSet = [...new Set(nameInData)];
        if (nameInDataSet.indexOf(x.name) >= 0) {
            return 'duplicated';
        }
        this.data.push(x);
        this.save();
        return 'success';
    }
};
export default tagListModel;