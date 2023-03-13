import createId from "@/lib/createID";
const localStorageKeyName = 'tagList';
const tagStore = {
    tagList: [] as TagItem[],
    fetchTags() {
        this.tagList = JSON.parse(
            window.localStorage.getItem(localStorageKeyName) || "[]");
        return this.tagList;
    },
    saveTags() {
        window.localStorage.setItem(
            localStorageKeyName,
            JSON.stringify(this.tagList)
        );
    },
    createTag(name: string, icon: string) {
        if (name && icon) {
            const id = createId().toString();
            const x: TagItem = {
                id: id,
                name: name,
                icon: icon,
            }
            const nameInData = this.tagList.map(value => value.name);
            const nameInDataSet = [...new Set(nameInData)];
            if (nameInDataSet.indexOf(x.name) >= 0) {
                window.alert("标签名重复了，请重新输入！");
                return 'duplicated';
            }
            this.tagList.push(x);
            this.saveTags();
            window.alert("添加成功！");
            return 'success';
        } else if (!name) {
            window.alert("请输入标签名！");
        } else if (icon === "" || icon === null || icon === undefined) {
            window.alert("请选择标签图标！");
        }
    },
    removeTag(id: string) {
        let index = -1;
        for (let i = 0; i < this.tagList.length; i++) {
            if (this.tagList[i].id === id) {
                index = i;
                break;
            }
        }
        this.tagList.splice(index, 1);
        this.saveTags();
        return true;
    },
    updateTag(id: string, name: string, icon: string) {
        if (name && icon) {
            const idList = this.tagList.map(item => item.id);
            if (idList.indexOf(id) >= 0) {
                const names = this.tagList.map(item => item.name);
                const tag = this.tagList.filter(item => item.id === id)[0];
                if (names.indexOf(name) >= 0 && tag.name !== name) {
                    window.alert("标签名重复了，请重新输入！");
                    return 'duplicated';
                } else {
                    tag.name = name;
                    tag.icon = icon;
                    this.saveTags();
                    window.alert("保存成功");
                    return 'success';
                }
            } else {
                window.alert("编辑的标签不存在！");
                return 'not found';
            }
        }
    },
    findTag(id: string) {
        return this.tagList.filter((t) => t.id === id)[0];
    }
};
tagStore.fetchTags();
export default tagStore;