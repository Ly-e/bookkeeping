type TagItem = {
    id: string;
    name: string;
    icon: string;
}
type RecordItem = {
    tags: TagItem[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date;
}
type TagListModel = {
    data: TagItem[]
    fetch: () => TagItem[]
    create: (name: string, icon: string) => 'success' | 'duplicated'
    update: (id: string, name: string, icon: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
    save: () => void
}
interface Window {
    // tag
    tagList: TagItem[]
    createTag: (name: string, icon: string) => 'success' | 'duplicated' | undefined
    removeTag: (id: string) => boolean
    updateTag: (id: string, name: string, icon: string) => 'success' | 'duplicated' | 'not found' | undefined
    findTag: (id: string, tag: TagItem[]) => TagItem
    //record
    recordList: RecordItem[]
    createRecord: (record: RecordItem) => void
}