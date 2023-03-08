const localStorageKeyName = 'tagList';
type TagListModel = {
    data: TagItem[]
    fetch: () => TagItem[]
    create: (name: string, icon: string) => 'success' | 'duplicated'
    update: (id: string, name: string, icon: string) => 'success' | 'not found' | 'duplicated'
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
    update(id, name, icon) {
        const idList = this.data.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                const tag = this.data.filter(item => item.id === id)[0];
                tag.name = name;
                tag.icon = icon;
                this.save();
                return 'success';
            }
        } else {
            return 'not found';
        }
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