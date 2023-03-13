import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";

const store = {
    //record store
    recordList: recordListModel.fetch(),
    createRecord(record: RecordItem) {
        recordListModel.create(record);
    },
    //tag store
    tagList: tagListModel.fetch(),
    createTag(name: string, icon: string) {
        if (name && icon) {
            const message = tagListModel.create(name, icon);
            if (message === "duplicated") {
                window.alert("标签名重复了，请重新输入！");
                return 'duplicated'
            } else if (message === "success") {
                window.alert("添加成功！");
                return 'success';
            }
        } else if (!name) {
            window.alert("请输入标签名！");
        } else if (icon === "" || icon === null || icon === undefined) {
            window.alert("请选择标签图标！");
        }
    },
    removeTag(id: string) {
        return tagListModel.remove(id)
    },
    updateTag(id: string, name: string, icon: string) {
        if (name && icon) {
            const message = tagListModel.update(id, name, icon);
            if (message === "success") {
                window.alert("保存成功");
                return 'success';
            } else if (message === "duplicated") {
                window.alert("标签名重复了，请重新输入！");
                return 'duplicated';
            } else if (message === "not found") {
                window.alert("编辑的标签不存在！");
                return 'not found';
            }
        }
    },
    findTag(id: string) {
        return this.tagList.filter((t) => t.id === id)[0];
    }

}
export default store;